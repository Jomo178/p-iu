import { PrismaClient } from "@prisma/client";
import mongoose, { ConnectOptions } from "mongoose";

import { env } from "@/env";

declare global {
  var cachedPrisma: PrismaClient | undefined;
  var mongoose: Cached | undefined;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export { prisma };

interface Cached {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
}

let cached: Cached = global.mongoose || { conn: null, promise: null };

async function connectDB(): Promise<mongoose.Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: ConnectOptions = {
      bufferCommands: false,
      dbName: "IU",
    };

    cached.promise = mongoose
      .connect(env.MAIN_DATABASE_URL, opts)
      .then((mongooseInstance: mongoose.Mongoose) => {
        return mongooseInstance;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export { connectDB };
