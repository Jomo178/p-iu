"use server";

import { prisma } from "./lib/database";

export async function updateJsonFile() {
  const itemsArray = [
    {
      _id: {
        $oid: "66d46ff5e9f83187783a3c78",
      },
      name: "Natty",
      group: "Kiss of Life",
      rarity: "1",
      act: "Midas Touch",
      code: "NYMIKI1",
      image:
        "https://utfs.io/f/3d2fac7c-ac8d-471d-a3c6-42cea6fbce01-8sjoks.png",
      releaseDate: {
        $date: "2024-08-31T11:29:47.594Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-08-31T11:31:43.815Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-01T13:45:23.454Z",
      },
      updatedAt: {
        $date: "2024-08-31T11:31:43.815Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d61333dc4535af10c1e8bc",
      },
      name: "Changbin",
      group: "Stray Kids",
      rarity: "1",
      act: "5 Star",
      code: "CN5ST1",
      image:
        "https://utfs.io/f/73bbd687-439d-4d4c-8b8b-42fd40ee9b85-kmrp0i.png",
      releaseDate: {
        $date: "2024-08-31T11:34:16.488Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-08-31T11:36:21.991Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-02T19:34:10.105Z",
      },
      updatedAt: {
        $date: "2024-08-31T11:36:21.991Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d61351d0188cb8e4c86a64",
      },
      name: "Haneul",
      group: "Kiss of Life",
      rarity: "1",
      act: "Midas Touch",
      code: "HLMIKI1",
      image:
        "https://utfs.io/f/2b2bf057-cd4f-4cdf-ab85-12d710ae452f-4c0825.png",
      releaseDate: {
        $date: "2024-08-31T11:29:47.594Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-08-31T11:31:30.052Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-02T19:34:40.330Z",
      },
      updatedAt: {
        $date: "2024-08-31T11:31:30.052Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d6135f5f374a8ac3866781",
      },
      name: "Julie",
      group: "Kiss of Life",
      rarity: "1",
      act: "Midas Touch",
      code: "JEMIKI1",
      image:
        "https://utfs.io/f/5029cc0f-8bfc-4db7-bbc5-f0fc7c4d783b-4909k3.png",
      releaseDate: {
        $date: "2024-08-31T11:29:47.594Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-08-31T11:31:36.550Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-02T19:34:53.736Z",
      },
      updatedAt: {
        $date: "2024-08-31T11:31:36.550Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d61371d0188cb8e4c86a67",
      },
      name: "Felix",
      group: "Stray Kids",
      rarity: "1",
      act: "5 Star",
      code: "FX5ST1",
      image:
        "https://utfs.io/f/20ce1337-09eb-4bfe-85aa-e9cef92d7f8e-n5n0ss.png",
      releaseDate: {
        $date: "2024-08-31T11:34:16.488Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-08-31T11:36:29.923Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-02T19:35:12.187Z",
      },
      updatedAt: {
        $date: "2024-08-31T11:36:29.923Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d6180f2fe1cc837a2e975d",
      },
      name: "Han",
      group: "Stray Kids",
      rarity: "1",
      act: "5 Star",
      code: "HN5ST1",
      image:
        "https://utfs.io/f/db912f93-9f70-4525-9cb2-e8789b555e05-hv9emd.png",
      releaseDate: {
        $date: "2024-08-31T11:34:16.488Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-08-31T11:36:37.380Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-02T19:54:54.360Z",
      },
      updatedAt: {
        $date: "2024-08-31T11:36:37.380Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d618222fe1cc837a2e9760",
      },
      name: "Belle",
      group: "Kiss of Life",
      rarity: "1",
      act: "Midas Touch",
      code: "BEMIKI1",
      image:
        "https://utfs.io/f/9c69e5f6-c0ef-4b6d-802a-018fe4d424ae-3excp4.png",
      releaseDate: {
        $date: "2024-08-31T11:34:16.488Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-02T19:34:40.068Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-02T19:55:13.628Z",
      },
      updatedAt: {
        $date: "2024-09-02T19:34:40.068Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d6183ddc4535af10c1e8bf",
      },
      name: "I.N",
      group: "Stray Kids",
      rarity: "1",
      act: "5 Star",
      code: "IN5ST1",
      image:
        "https://utfs.io/f/df6fd0e1-697b-4cd5-836d-3732f0aafa27-ow5trp.png",
      releaseDate: {
        $date: "2024-08-31T11:34:16.488Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-08-31T11:36:48.714Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-02T19:55:40.355Z",
      },
      updatedAt: {
        $date: "2024-08-31T11:36:48.714Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d6186a55fa9774bacf801e",
      },
      name: "Lee Know",
      group: "Stray Kids",
      rarity: "1",
      act: "5 Star",
      code: "LW5ST1",
      image:
        "https://utfs.io/f/bc5b5527-f50f-4226-8fce-84031606374b-vhek8f.png",
      releaseDate: {
        $date: "2024-08-31T11:34:16.488Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-08-31T11:36:56.288Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-02T19:56:25.018Z",
      },
      updatedAt: {
        $date: "2024-08-31T11:36:56.288Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d618d0dc4535af10c1e8c1",
      },
      name: "Seungmin",
      group: "Stray Kids",
      rarity: "1",
      act: "5 Star",
      code: "SN5ST1",
      image:
        "https://utfs.io/f/01b1e218-94ee-47da-b0ba-fb851051db75-whv552.png",
      releaseDate: {
        $date: "2024-08-31T11:34:16.488Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-08-31T11:37:04.141Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-02T19:58:07.407Z",
      },
      updatedAt: {
        $date: "2024-08-31T11:37:04.141Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d618d8dc4535af10c1e8c3",
      },
      name: "Jungkook",
      group: "BTS",
      rarity: "1",
      act: "Boy with luv",
      code: "JKBOBT1",
      image:
        "https://utfs.io/f/eea78aaa-1203-4e82-aa14-d054baefe880-ml4zvb.png",
      releaseDate: {
        $date: "2024-08-31T12:08:57.187Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-08-31T12:13:22.886Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-02T19:58:15.622Z",
      },
      updatedAt: {
        $date: "2024-08-31T12:13:22.886Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d618e9dc4535af10c1e8c5",
      },
      name: "Suga",
      group: "BTS",
      rarity: "1",
      act: "Boy with luv",
      code: "SABOBT1",
      image:
        "https://utfs.io/f/7a6c61c6-d849-461c-80c5-43a3cd3ae5b5-ml4f4r.png",
      releaseDate: {
        $date: "2024-08-31T12:08:57.187Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-08-31T12:13:54.860Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-02T19:58:32.763Z",
      },
      updatedAt: {
        $date: "2024-08-31T12:13:54.860Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d61a5955fa9774bacf8021",
      },
      name: "V",
      group: "BTS",
      rarity: "1",
      act: "Boy with luv",
      code: "VVBOBT1",
      image:
        "https://utfs.io/f/0ba95a17-fa80-41a9-8b38-e76adaad70a9-ml4jk1.png",
      releaseDate: {
        $date: "2024-08-31T12:08:57.187Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-08-31T12:13:30.195Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-02T20:04:40.148Z",
      },
      updatedAt: {
        $date: "2024-08-31T12:13:30.195Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d61e3976817c00abce7fff",
      },
      name: "RM",
      group: "BTS",
      rarity: "1",
      act: "Boy with luv",
      code: "RMBOBT1",
      image:
        "https://utfs.io/f/bef9888c-08f2-4c8a-a52e-46cbc8e9ec80-ml32vv.png",
      releaseDate: {
        $date: "2024-08-31T12:08:57.187Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-08-31T12:13:37.234Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-02T20:21:11.598Z",
      },
      updatedAt: {
        $date: "2024-08-31T12:13:37.234Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d61e4b76817c00abce8002",
      },
      name: "Jin",
      group: "BTS",
      rarity: "1",
      act: "Boy with luv",
      code: "JIBOBT1",
      image:
        "https://utfs.io/f/a1b24ae6-7d83-4dbe-9519-ee6a53e74276-ml4efm.png",
      releaseDate: {
        $date: "2024-08-31T17:19:19.306Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-08-31T17:22:04.998Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-02T20:21:30.136Z",
      },
      updatedAt: {
        $date: "2024-08-31T17:22:04.998Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d61e6079863fa26cc03caf",
      },
      name: "Jimin",
      group: "BTS",
      rarity: "1",
      act: "Boy with luv",
      code: "JNBOBT1",
      image:
        "https://utfs.io/f/caf7ffa8-10d6-49ee-b21a-84b278c37a6d-ml4gjk.png",
      releaseDate: {
        $date: "2024-08-31T12:08:57.187Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-08-31T12:13:44.711Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-02T20:21:50.595Z",
      },
      updatedAt: {
        $date: "2024-08-31T12:13:44.711Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66d61e68dcd37dce2f2da606",
      },
      name: "J-hope",
      group: "BTS",
      rarity: "1",
      act: "Boy with luv",
      code: "JEBOBT1",
      image:
        "https://utfs.io/f/5c488bda-84ae-4828-ac85-8492a9a30ff4-ml4dkm.png",
      releaseDate: {
        $date: "2024-08-31T12:08:57.187Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-08-31T12:14:08.983Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-02T20:21:58.789Z",
      },
      updatedAt: {
        $date: "2024-08-31T12:14:08.983Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66da009c7733e68d16eef7d5",
      },
      name: "Bang Chan",
      group: "Stray Kids",
      rarity: "1",
      act: "5 Star",
      code: "BN5ST1",
      image:
        "https://utfs.io/f/ea46dfff-111b-46c5-af3f-59ed18c491cc-pjhqty.png",
      releaseDate: {
        $date: "2024-08-31T11:34:16.488Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-02T19:34:24.831Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-05T19:03:55.015Z",
      },
      updatedAt: {
        $date: "2024-09-02T19:34:24.831Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66da00a47733e68d16eef7d8",
      },
      name: "Hyunjin",
      group: "Stray Kids",
      rarity: "1",
      act: "5 Star",
      code: "HJ5ST1",
      image:
        "https://utfs.io/f/371e20bc-a9de-49ae-b726-fe7ce4ad5a44-q8czqj.png",
      releaseDate: {
        $date: "2024-08-31T11:34:16.488Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-08-31T15:30:15.476Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-05T19:04:02.989Z",
      },
      updatedAt: {
        $date: "2024-08-31T15:30:15.476Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66dc32eee0c29e9574788772",
      },
      name: "Jaehyun",
      group: "Soloist",
      rarity: "1",
      act: "Try again",
      code: "JNTRSO1",
      image:
        "https://utfs.io/f/94b8abb3-2cd6-4b8a-b535-fcf2bba7fd8e-ixdjo7.png",
      releaseDate: {
        $date: "2024-09-06T06:48:00.000Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-09-06T06:50:50.525Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-07T11:03:09.233Z",
      },
      updatedAt: {
        $date: "2024-09-06T06:50:50.525Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66dc6bebb7d7295958cea9af",
      },
      name: "Wonho",
      group: "Soloist",
      rarity: "1",
      act: "Facade",
      code: "WOFCSO1",
      image:
        "https://utfs.io/f/5fa6959f-fa4b-4247-a969-8e4fb2fe5543-hoblts.png",
      releaseDate: {
        $date: "2024-09-05T19:01:00.000Z",
      },
      createdBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      createdAt: {
        $date: "2024-09-05T19:06:01.856Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-07T15:06:17.609Z",
      },
      updatedAt: {
        $date: "2024-09-05T19:06:01.856Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66dc9aeb5efa76dfd26f2364",
      },
      name: "Hyein",
      group: "NewJeans",
      rarity: "1",
      act: "OMG",
      code: "HNOMNE1",
      image:
        "https://utfs.io/f/1c15d595-5743-4454-9cbd-f99a7719b759-okplpr.png",
      releaseDate: {
        $date: "2024-09-07T18:22:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-07T18:24:20.637Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-07T18:26:49.943Z",
      },
      updatedAt: {
        $date: "2024-09-07T18:24:20.637Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66dc9af25efa76dfd26f2367",
      },
      name: "Minji",
      group: "NewJeans",
      rarity: "1",
      act: "OMG",
      code: "MIOMNE1",
      image:
        "https://utfs.io/f/159fd771-cd25-4a71-86b1-d3dfaa04bed9-oi8nuf.png",
      releaseDate: {
        $date: "2024-09-07T18:22:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-07T18:24:28.059Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-07T18:26:57.766Z",
      },
      updatedAt: {
        $date: "2024-09-07T18:24:28.059Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66dc9afd256457eb1604e9e8",
      },
      name: "Danielle",
      group: "NewJeans",
      rarity: "1",
      act: "OMG",
      code: "DEOMNE1",
      image:
        "https://utfs.io/f/584624c3-2087-4fd5-81d4-ffc817890689-qdndb4.png",
      releaseDate: {
        $date: "2024-09-07T18:23:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-07T18:24:43.138Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-07T18:27:07.547Z",
      },
      updatedAt: {
        $date: "2024-09-07T18:24:43.138Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66dc9b06256457eb1604e9eb",
      },
      name: "Hanni",
      group: "NewJeans",
      rarity: "1",
      act: "OMG",
      code: "HIOMNE1",
      image:
        "https://utfs.io/f/5b444ac9-d120-47e8-a0e0-80396d1c946c-ol4qm0.png",
      releaseDate: {
        $date: "2024-09-07T18:23:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-07T18:24:53.250Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-07T18:27:17.026Z",
      },
      updatedAt: {
        $date: "2024-09-07T18:24:53.250Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66dc9b105efa76dfd26f2369",
      },
      name: "Haerin",
      group: "NewJeans",
      rarity: "1",
      act: "OMG",
      code: "HROMNE1",
      image:
        "https://utfs.io/f/54e9ccd8-1ab4-4687-a84c-41bb29dcdb5f-j500yb.png",
      releaseDate: {
        $date: "2024-09-07T18:25:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-07T18:25:48.273Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-07T18:27:27.170Z",
      },
      updatedAt: {
        $date: "2024-09-07T18:25:48.273Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66dc9b17e2ea7909f0904043",
      },
      name: "IU",
      group: "Soloist",
      rarity: "1",
      act: "Last Fantasy",
      code: "IULASO1",
      image:
        "https://utfs.io/f/1f095281-cbfd-4a03-8af9-96ffc2d156dd-rqcn4z.png",
      releaseDate: {
        $date: "2024-09-07T18:23:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-07T18:25:04.520Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-07T18:27:34.278Z",
      },
      updatedAt: {
        $date: "2024-09-07T18:25:04.520Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66dca6f0c2af24bf1cd20955",
      },
      name: "Lisa",
      group: "Soloist",
      rarity: "1",
      act: "LALISA",
      code: "LALASO1",
      image:
        "https://utfs.io/f/d4e86d57-1129-47b4-8367-900b81e02cf9-o1gvxk.png",
      releaseDate: {
        $date: "2024-09-07T18:27:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-07T18:28:18.970Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-07T19:18:07.504Z",
      },
      updatedAt: {
        $date: "2024-09-07T18:28:18.970Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66dcb5caaec958f696ed321a",
      },
      name: "Jisoo",
      group: "BLACKPINK",
      rarity: "1",
      act: "Kill This Love",
      code: "JOKIBL1",
      image:
        "https://utfs.io/f/d0ebb142-00df-4c47-b813-e85f908415fe-yy3c20.png",
      releaseDate: {
        $date: "2024-09-07T20:12:00.000Z",
      },
      createdBy: {
        $oid: "66d30395f194a44e51d4f906",
      },
      createdAt: {
        $date: "2024-09-07T20:17:24.614Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-07T20:21:28.606Z",
      },
      updatedAt: {
        $date: "2024-09-07T20:17:24.614Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66dcb5f7f9819b3804db4c06",
      },
      name: "Jennie",
      group: "BLACKPINK",
      rarity: "1",
      act: "Kill This Love",
      code: "JEKIBL1",
      image:
        "https://utfs.io/f/abd09c56-5506-4f5e-bcd4-9fdea58279a9-ta4l91.png",
      releaseDate: {
        $date: "2024-09-07T20:13:00.000Z",
      },
      createdBy: {
        $oid: "66d30395f194a44e51d4f906",
      },
      createdAt: {
        $date: "2024-09-07T20:17:32.364Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-07T20:22:13.690Z",
      },
      updatedAt: {
        $date: "2024-09-07T20:17:32.364Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66dcb603f9819b3804db4c09",
      },
      name: "Rosé",
      group: "BLACKPINK",
      rarity: "1",
      act: "Kill This Love",
      code: "RÉKIBL1",
      image:
        "https://utfs.io/f/e620ff9d-11a3-4346-9a09-dda3641a40f8-dngzub.1.png",
      releaseDate: {
        $date: "2024-09-07T20:14:00.000Z",
      },
      createdBy: {
        $oid: "66d30395f194a44e51d4f906",
      },
      createdAt: {
        $date: "2024-09-07T20:17:38.753Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-07T20:22:26.562Z",
      },
      updatedAt: {
        $date: "2024-09-07T20:17:38.753Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66dcb60d917c6349becc6712",
      },
      name: "Lisa",
      group: "BLACKPINK",
      rarity: "1",
      act: "Kill This Love",
      code: "LAKIBL1",
      image:
        "https://utfs.io/f/b582839a-5bb0-4e4d-94ed-a1f38c4090b3-h2f0dz.1.png",
      releaseDate: {
        $date: "2024-09-07T20:14:00.000Z",
      },
      createdBy: {
        $oid: "66d30395f194a44e51d4f906",
      },
      createdAt: {
        $date: "2024-09-07T20:17:44.894Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-07T20:22:36.287Z",
      },
      updatedAt: {
        $date: "2024-09-07T20:17:44.894Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec38628e347ccad76b037",
      },
      name: "Jeon Somi",
      group: "Soloist",
      rarity: "1",
      act: "What You Waiting For",
      code: "JIWHSO1",
      image: "https://utfs.io/f/23c777f9-6ddc-468f-96c6-6fb31458d240-23shk.png",
      releaseDate: {
        $date: "2024-09-21T09:06:46.197Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-09-21T09:12:03.244Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-21T13:00:53.198Z",
      },
      updatedAt: {
        $date: "2024-09-21T09:12:03.244Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec39847f1d66deeff093e",
      },
      name: "Jungkook",
      group: "Soloist",
      rarity: "1",
      act: "Standing next to you",
      code: "JKSTSO1",
      image: "https://utfs.io/f/b9aab603-bbb3-4d1f-a74f-58fe716e61f2-xv5mi.png",
      releaseDate: {
        $date: "2024-09-12T08:59:34.030Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-09-12T09:02:39.956Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-21T13:01:11.233Z",
      },
      updatedAt: {
        $date: "2024-09-12T09:02:39.956Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec3b847f1d66deeff0942",
      },
      name: "Winter",
      group: "Aespa",
      rarity: "1",
      act: "Next level",
      code: "WRNEAE1",
      image:
        "https://utfs.io/f/c933579e-7949-4311-830f-9b77af864f74-emfin5.png",
      releaseDate: {
        $date: "2024-09-12T08:59:34.030Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-09-12T09:03:17.970Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-21T13:01:43.684Z",
      },
      updatedAt: {
        $date: "2024-09-12T09:03:17.970Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec3cf0ce947c7b9ecb6f7",
      },
      name: "Ningning",
      group: "Aespa",
      rarity: "1",
      act: "Next level",
      code: "NGNEAE1",
      image:
        "https://utfs.io/f/3a03370a-e370-48e1-aae0-fdd994d547c2-emfjdq.png",
      releaseDate: {
        $date: "2024-09-12T08:59:34.030Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-09-12T09:02:47.817Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-21T13:02:05.674Z",
      },
      updatedAt: {
        $date: "2024-09-12T09:02:47.817Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec3e128e347ccad76b03b",
      },
      name: "Karina",
      group: "Aespa",
      rarity: "1",
      act: "Next level",
      code: "KANEAE1",
      image:
        "https://utfs.io/f/15cd4370-43b1-46dc-a184-59c7ef83ea62-hkqq79.png",
      releaseDate: {
        $date: "2024-09-12T08:59:34.030Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-09-12T09:02:55.792Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-21T13:02:24.827Z",
      },
      updatedAt: {
        $date: "2024-09-12T09:02:55.792Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec3f20ce947c7b9ecb6fb",
      },
      name: "Giselle",
      group: "Aespa",
      rarity: "1",
      act: "Next level",
      code: "GENEAE1",
      image:
        "https://utfs.io/f/8d439694-9983-4002-b2b9-f26d169a87a0-emfh5m.png",
      releaseDate: {
        $date: "2024-09-12T08:59:34.030Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-09-12T09:03:07.246Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-21T13:02:41.742Z",
      },
      updatedAt: {
        $date: "2024-09-12T09:03:07.246Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec4080ce947c7b9ecb6fd",
      },
      name: "Beomgyu",
      group: "TXT",
      rarity: "1",
      act: " The Dream Chapter: Star",
      code: "BU TTX1",
      image:
        "https://utfs.io/f/fb364bdc-1fda-459d-b0a5-5fb273f6842f-3nwj0e.png",
      releaseDate: {
        $date: "2024-09-21T09:06:46.197Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-09-21T09:11:28.578Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-21T13:03:03.398Z",
      },
      updatedAt: {
        $date: "2024-09-21T09:11:28.578Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec4170ce947c7b9ecb6ff",
      },
      name: "Kang Daniel",
      group: "Soloist",
      rarity: "1",
      act: "The Story",
      code: "KLTHSO1",
      image:
        "https://utfs.io/f/3277cea3-df28-4ae9-8cb6-02182fa46961-m56hp9.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T12:42:21.329Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:03:18.105Z",
      },
      updatedAt: {
        $date: "2024-09-21T12:42:21.329Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec41928e347ccad76b03d",
      },
      name: "Huening Kai",
      group: "TXT",
      rarity: "1",
      act: " The Dream Chapter: Star",
      code: "HI TTX1",
      image:
        "https://utfs.io/f/a111309c-d40b-4bd1-88df-e005f238e45c-vfp7dz.png",
      releaseDate: {
        $date: "2024-09-21T09:06:46.197Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-09-21T09:11:35.338Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-21T13:03:20.320Z",
      },
      updatedAt: {
        $date: "2024-09-21T09:11:35.338Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec42b28e347ccad76b03f",
      },
      name: "Chungha",
      group: "Soloist",
      rarity: "1",
      act: "Roller Coaster",
      code: "CAROSO1",
      image: "https://utfs.io/f/1c78b5cf-b00e-4ccd-a372-c44074bb012d-e1agu.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T12:42:29.405Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:03:38.621Z",
      },
      updatedAt: {
        $date: "2024-09-21T12:42:29.405Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec42f0ce947c7b9ecb701",
      },
      name: "Soobin",
      group: "TXT",
      rarity: "1",
      act: " The Dream Chapter: Star",
      code: "SN TTX1",
      image:
        "https://utfs.io/f/e7e70a65-eea9-476a-800d-295357820eb9-etvdyk.png",
      releaseDate: {
        $date: "2024-09-21T09:06:46.197Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-09-21T09:11:41.963Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-21T13:03:42.414Z",
      },
      updatedAt: {
        $date: "2024-09-21T09:11:41.963Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec44047f1d66deeff0944",
      },
      name: "Taehyun",
      group: "TXT",
      rarity: "1",
      act: " The Dream Chapter: Star",
      code: "TN TTX1",
      image:
        "https://utfs.io/f/cdb2e70a-8992-48f4-9ec9-46fd8234862d-pmyw3i.png",
      releaseDate: {
        $date: "2024-09-21T09:06:46.197Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-09-21T09:11:48.413Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-21T13:03:59.879Z",
      },
      updatedAt: {
        $date: "2024-09-21T09:11:48.413Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec452edeb69af45f1251a",
      },
      name: "Yeosang",
      group: "ATEEZ",
      rarity: "1",
      act: "Zero: Fever Part 1",
      code: "YGZEAT1",
      image:
        "https://utfs.io/f/874c089d-131e-4f7c-aa7a-eaba3e8ba0d4-lomie6.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:14:58.016Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:04:17.028Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:14:58.016Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec4530ce947c7b9ecb703",
      },
      name: "Yeonjun",
      group: "TXT",
      rarity: "1",
      act: " The Dream Chapter: Star",
      code: "YN TTX1",
      image:
        "https://utfs.io/f/c9ff289e-dd1a-477b-a0de-defa05eb7e21-l8bknc.png",
      releaseDate: {
        $date: "2024-09-21T09:06:46.197Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-09-21T09:11:54.891Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-09-21T13:04:19.007Z",
      },
      updatedAt: {
        $date: "2024-09-21T09:11:54.891Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec4810ce947c7b9ecb705",
      },
      name: "Hongjoong",
      group: "ATEEZ",
      rarity: "1",
      act: "Zero: Fever Part 1",
      code: "HGZEAT1",
      image:
        "https://utfs.io/f/6ffa9a2f-ea3e-4610-abfa-4c87b38c5192-l4uppz.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:14:05.842Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:05:04.259Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:14:05.842Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec48c0ce947c7b9ecb707",
      },
      name: "Jongho",
      group: "ATEEZ",
      rarity: "1",
      act: "Zero: Fever Part 1",
      code: "JOZEAT1",
      image:
        "https://utfs.io/f/35b16075-41e9-4115-9248-ba717d500d38-qveorz.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:14:14.225Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:05:15.514Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:14:14.225Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec4bd0ce947c7b9ecb709",
      },
      name: "Mingi",
      group: "ATEEZ",
      rarity: "1",
      act: "Zero: Fever Part 1",
      code: "MIZEAT1",
      image:
        "https://utfs.io/f/fa678d3e-acf3-4d41-a286-b5ebaafc5e93-lg1uag.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:14:22.129Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:06:04.647Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:14:22.129Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec4db47f1d66deeff0946",
      },
      name: "San",
      group: "ATEEZ",
      rarity: "1",
      act: "Zero: Fever Part 1",
      code: "SNZEAT1",
      image:
        "https://utfs.io/f/8cf37972-e27e-4178-bd17-1acdc41b15ad-i7dmcs.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:14:31.422Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:06:34.168Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:14:31.422Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec4e8edeb69af45f1251e",
      },
      name: "Seonghwa",
      group: "ATEEZ",
      rarity: "1",
      act: "Zero: Fever Part 1",
      code: "SAZEAT1",
      image:
        "https://utfs.io/f/8b34da0f-2374-4a21-939c-337da2ecd8fe-1z7cyw.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:14:39.559Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:06:47.555Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:14:39.559Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec4f947f1d66deeff0948",
      },
      name: "Wooyoung",
      group: "ATEEZ",
      rarity: "1",
      act: "Zero: Fever Part 1",
      code: "WGZEAT1",
      image:
        "https://utfs.io/f/904112b6-c8ae-4ad3-8761-ce4a16c4de25-jwl0lv.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:14:47.472Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:07:04.054Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:14:47.472Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec50547f1d66deeff094a",
      },
      name: "Yunho",
      group: "ATEEZ",
      rarity: "1",
      act: "Zero: Fever Part 1",
      code: "YOZEAT1",
      image:
        "https://utfs.io/f/c16fd567-ca2d-4ea7-bca4-0738f62aa36d-l98nar.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:15:05.505Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:07:16.264Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:15:05.505Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec52bedeb69af45f12520",
      },
      name: "Nayeon",
      group: "TWICE",
      rarity: "1",
      act: "Summer Nights",
      code: "NNSUTW1",
      image:
        "https://utfs.io/f/14ffba9c-98d6-468a-8b65-66b984eba510-swf4zt.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:04:38.622Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:07:54.044Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:04:38.622Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec5530ce947c7b9ecb70b",
      },
      name: "Tzuyu",
      group: "TWICE",
      rarity: "1",
      act: "Summer Nights",
      code: "TUSUTW1",
      image:
        "https://utfs.io/f/01050f18-97e3-447a-96d0-a9413393b02b-wttrz0.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:07:18.214Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:08:34.933Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:07:18.214Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec55d0ce947c7b9ecb70d",
      },
      name: "Sana",
      group: "TWICE",
      rarity: "1",
      act: "Summer Nights",
      code: "SASUTW1",
      image:
        "https://utfs.io/f/6713d1f6-6305-4e32-a677-f6787220f2c8-eznpi2.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:04:46.301Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:08:44.097Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:04:46.301Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec56c6d90d023bb746fb6",
      },
      name: "Momo",
      group: "TWICE",
      rarity: "1",
      act: "Summer Nights",
      code: "MOSUTW1",
      image:
        "https://utfs.io/f/1df8f40b-8c3d-4eea-b970-7bf75b378a4c-xp6e03.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:04:30.920Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:08:59.369Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:04:30.920Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec57a6d90d023bb746fba",
      },
      name: "Mina",
      group: "TWICE",
      rarity: "1",
      act: "Summer Nights",
      code: "MASUTW1",
      image:
        "https://utfs.io/f/869fde35-a797-444f-9fee-3dc8660d66b2-qricm0.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:04:23.065Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:09:13.147Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:04:23.065Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec5886d90d023bb746fbc",
      },
      name: "Jihyo",
      group: "TWICE",
      rarity: "1",
      act: "Summer Nights",
      code: "JOSUTW1",
      image:
        "https://utfs.io/f/2dd4a4df-a94b-47b2-ab2b-06ad3526571c-u2vle0.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:04:13.106Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:09:27.418Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:04:13.106Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec5970ce947c7b9ecb70f",
      },
      name: "Jeongyeon",
      group: "TWICE",
      rarity: "1",
      act: "Summer Nights",
      code: "JNSUTW1",
      image:
        "https://utfs.io/f/b9cd637d-5d8d-42c5-a572-c04dc6970e80-jgpjn3.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:04:02.605Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:09:42.030Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:04:02.605Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec5a10ce947c7b9ecb711",
      },
      name: "Dahyun",
      group: "TWICE",
      rarity: "1",
      act: "Summer Nights",
      code: "DNSUTW1",
      image:
        "https://utfs.io/f/7bf47796-51d3-49c7-a1cb-a0cd380b4b10-iso01s.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:03:52.799Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:09:52.750Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:03:52.799Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec5b659bf71b0e360e3b2",
      },
      name: "Chaeyoung",
      group: "TWICE",
      rarity: "1",
      act: "Summer Nights",
      code: "CGSUTW1",
      image:
        "https://utfs.io/f/2ac82314-4410-41db-8997-82dbe1a85443-v0gf48.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T08:03:44.746Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:10:13.064Z",
      },
      updatedAt: {
        $date: "2024-09-21T08:03:44.746Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec5c747f1d66deeff094c",
      },
      name: "Baekhyun",
      group: "EXO",
      rarity: "1",
      act: "Lucky One",
      code: "BNLUEX1",
      image:
        "https://utfs.io/f/8688bd8d-bef9-441e-a838-089567cea4d0-apghp6.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T12:44:45.512Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:10:30.560Z",
      },
      updatedAt: {
        $date: "2024-09-21T12:44:45.512Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec5da59bf71b0e360e3b6",
      },
      name: "Chanyeol",
      group: "EXO",
      rarity: "1",
      act: "Lucky One",
      code: "CLLUEX1",
      image:
        "https://utfs.io/f/b660cd8e-9edb-4228-92f5-c2f5b0181371-n1it0u.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T12:44:54.349Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:10:49.186Z",
      },
      updatedAt: {
        $date: "2024-09-21T12:44:54.349Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec5f00ce947c7b9ecb713",
      },
      name: "Chen",
      group: "EXO",
      rarity: "1",
      act: "Lucky One",
      code: "CNLUEX1",
      image:
        "https://utfs.io/f/a34f29bb-c64f-48f5-86ff-75fe52ad82d0-f6rmmz.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T12:45:04.702Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:11:11.080Z",
      },
      updatedAt: {
        $date: "2024-09-21T12:45:04.702Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec60559bf71b0e360e3b8",
      },
      name: "D.O",
      group: "EXO",
      rarity: "1",
      act: "Lucky One",
      code: "DOLUEX1",
      image:
        "https://utfs.io/f/089e5069-1b19-444a-a329-560073aae3c1-9tbcwj.O.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T12:45:12.858Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:11:32.656Z",
      },
      updatedAt: {
        $date: "2024-09-21T12:45:12.858Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec61a03e1da549b424c47",
      },
      name: "Kai",
      group: "EXO",
      rarity: "1",
      act: "Lucky One",
      code: "KILUEX1",
      image:
        "https://utfs.io/f/a82908f3-e4e6-453b-adec-33ffb4f63dd8-fjs1zw.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T12:45:20.812Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:11:53.491Z",
      },
      updatedAt: {
        $date: "2024-09-21T12:45:20.812Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec62b0ce947c7b9ecb715",
      },
      name: "Lay",
      group: "EXO",
      rarity: "1",
      act: "Lucky One",
      code: "LYLUEX1",
      image:
        "https://utfs.io/f/2a3c73f9-c20a-4238-8e07-0d524d427982-fjs2r1.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T12:45:31.419Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:12:10.094Z",
      },
      updatedAt: {
        $date: "2024-09-21T12:45:31.419Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec642edeb69af45f12522",
      },
      name: "Sehun",
      group: "EXO",
      rarity: "1",
      act: "Lucky One",
      code: "SNLUEX1",
      image:
        "https://utfs.io/f/d7c687b0-08dc-42a6-8d4a-2a4f018c2fd1-qmqr20.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T12:45:41.303Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:12:33.031Z",
      },
      updatedAt: {
        $date: "2024-09-21T12:45:41.303Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "66eec65a0ce947c7b9ecb717",
      },
      name: "Suho",
      group: "EXO",
      rarity: "1",
      act: "Lucky One",
      code: "SOLUEX1",
      image:
        "https://utfs.io/f/83ab106d-7b96-49a4-a314-48b4f7d0d1ef-f6h54w.png",
      releaseDate: {
        $date: "2024-09-07T18:22:18.437Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T12:45:49.402Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-09-21T13:12:57.826Z",
      },
      updatedAt: {
        $date: "2024-09-21T12:45:49.402Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340956",
      },
      name: "Rei",
      group: "IVE",
      rarity: "1",
      act: "Love Dive",
      code: "RILOIV1",
      image:
        "https://utfs.io/f/ee79076b-3542-413b-99ef-dc5b99a4b65a-1sj7zc.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-09-21T13:54:07.515Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-03T13:01:04.427Z",
      },
      updatedAt: {
        $date: "2024-09-21T13:54:07.515Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340957",
      },
      name: "Yujin",
      group: "IVE",
      rarity: "1",
      act: "Love Dive",
      code: "YNLOIV1",
      image:
        "https://utfs.io/f/4ff64225-5eb7-4ec9-8120-aa9d4d16609d-bwbd37.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-09-21T13:54:16.672Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-03T13:01:04.427Z",
      },
      updatedAt: {
        $date: "2024-09-21T13:54:16.672Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340958",
      },
      name: "Gaeul",
      group: "IVE",
      rarity: "1",
      act: "Love Dive",
      code: "GLLOIV1",
      image:
        "https://utfs.io/f/2d77b973-df79-466d-8f58-a25a2491ddbd-1mewma.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-09-21T13:41:06.162Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-03T13:01:04.427Z",
      },
      updatedAt: {
        $date: "2024-09-21T13:41:06.162Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340955",
      },
      name: "Liz",
      group: "IVE",
      rarity: "1",
      act: "Love Dive",
      code: "LZLOIV1",
      image: "https://utfs.io/f/ef7a85cc-71c1-45b5-8117-640d420ecbae-1myl.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-21T13:45:55.671Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-03T13:01:04.427Z",
      },
      updatedAt: {
        $date: "2024-09-21T13:45:55.671Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734095b",
      },
      name: "Baekhyun",
      group: "Soloist",
      rarity: "1",
      act: "Delight",
      code: "BNDESO1",
      image:
        "https://utfs.io/f/2934d88b-79c3-4e6c-859a-5e994738cca1-liks1b.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-09-26T15:11:37.747Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-02T09:55:01.240Z",
      },
      updatedAt: {
        $date: "2024-09-26T15:11:37.747Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734095c",
      },
      name: "Heeseung",
      group: "ENHYPEN",
      rarity: "1",
      act: "Border : Carnival",
      code: "HGBOEN1",
      image:
        "https://utfs.io/f/d1e05526-e7ee-4fa8-b2b3-66bc234bca7a-8uwut5.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-03T13:04:24.079Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:05:20.714Z",
      },
      updatedAt: {
        $date: "2024-10-03T13:04:24.079Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734095d",
      },
      name: "Jake",
      group: "ENHYPEN",
      rarity: "1",
      act: "Border : Carnival",
      code: "JEBOEN1",
      image:
        "https://utfs.io/f/130129d1-9a6d-4c1b-bebd-ca85f4e26697-34pcxo.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-03T13:04:31.183Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:05:20.714Z",
      },
      updatedAt: {
        $date: "2024-10-03T13:04:31.183Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734095e",
      },
      name: "Jay",
      group: "ENHYPEN",
      rarity: "1",
      act: "Border : Carnival",
      code: "JYBOEN1",
      image:
        "https://utfs.io/f/dc47c201-93a0-4f47-a09d-e9588c277d2e-2ysvzf.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-03T13:04:41.798Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:05:20.714Z",
      },
      updatedAt: {
        $date: "2024-10-03T13:04:41.798Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734095f",
      },
      name: "Jungwon",
      group: "ENHYPEN",
      rarity: "1",
      act: "Border : Carnival",
      code: "JNBOEN1",
      image:
        "https://utfs.io/f/1172e2bf-1d79-4cea-ba0a-fe869f2a0b59-rw0q85.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-03T13:04:49.665Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:05:20.714Z",
      },
      updatedAt: {
        $date: "2024-10-03T13:04:49.665Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340960",
      },
      name: "Ni-Ki",
      group: "ENHYPEN",
      rarity: "1",
      act: "Border : Carnival",
      code: "NIBOEN1",
      image:
        "https://utfs.io/f/c21ba165-908c-4bde-b081-410867c162d3-vsupq5.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-03T13:04:57.893Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:05:20.714Z",
      },
      updatedAt: {
        $date: "2024-10-03T13:04:57.893Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734095a",
      },
      name: "Leeseo",
      group: "IVE",
      rarity: "1",
      act: "Love Dive",
      code: "LOLOIV1",
      image:
        "https://utfs.io/f/f61e3df0-1d0d-4cd0-a506-5921318114ca-iauq0f.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-09-21T13:53:59.619Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-03T13:01:04.427Z",
      },
      updatedAt: {
        $date: "2024-09-21T13:53:59.619Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340962",
      },
      name: "Sunoo",
      group: "ENHYPEN",
      rarity: "1",
      act: "Border : Carnival",
      code: "SOBOEN1",
      image:
        "https://utfs.io/f/34767e2d-bbb2-4996-b102-7404d83e97e2-75lc9t.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-03T13:05:13.192Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:05:20.714Z",
      },
      updatedAt: {
        $date: "2024-10-03T13:05:13.192Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340963",
      },
      name: "Doeun",
      group: "YOUNG POSSE",
      rarity: "1",
      act: "Macaroni Cheese",
      code: "DNMAYO1",
      image:
        "https://utfs.io/f/098feff2-3b17-4073-ab86-9c1764b77217-gqp6h9.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-03T13:07:06.372Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-10-04T18:47:36.388Z",
      },
      updatedAt: {
        $date: "2024-10-03T13:07:06.372Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340959",
      },
      name: "Wonyoung",
      group: "IVE",
      rarity: "1",
      act: "Love Dive",
      code: "WGLOIV1",
      image:
        "https://utfs.io/f/3ca34185-b3fe-49d6-89b9-d421fe7e4b5b-13951a.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-09-21T13:50:01.226Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-03T13:01:04.427Z",
      },
      updatedAt: {
        $date: "2024-09-21T13:50:01.226Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340965",
      },
      name: "Jieun",
      group: "YOUNG POSSE",
      rarity: "1",
      act: "Macaroni Cheese",
      code: "JNMAYO1",
      image:
        "https://utfs.io/f/d3c7e2fc-33f7-44f1-93fa-24aebbfbac23-wz7qxz.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-03T13:07:20.878Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-10-04T18:47:36.388Z",
      },
      updatedAt: {
        $date: "2024-10-03T13:07:20.878Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340966",
      },
      name: "Sunhye",
      group: "YOUNG POSSE",
      rarity: "1",
      act: "Macaroni Cheese",
      code: "SEMAYO1",
      image:
        "https://utfs.io/f/46f33f90-c828-4891-9c58-22a36e819047-azs9uq.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-03T13:07:28.634Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-10-04T18:47:36.388Z",
      },
      updatedAt: {
        $date: "2024-10-03T13:07:28.634Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340967",
      },
      name: "Yeonjung",
      group: "YOUNG POSSE",
      rarity: "1",
      act: "Macaroni Cheese",
      code: "YGMAYO1",
      image:
        "https://utfs.io/f/822bf085-51de-48f8-adc5-b3dcfbdabd9f-7fq9nb.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-03T13:07:37.081Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-10-04T18:47:36.388Z",
      },
      updatedAt: {
        $date: "2024-10-03T13:07:37.081Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340968",
      },
      name: "Sunmi",
      group: "Soloist",
      rarity: "1",
      act: "Gashina",
      code: "SIGASO1",
      image:
        "https://utfs.io/f/63426257-75d8-41c0-9842-58ec63709292-e5kmjg.png",
      releaseDate: {
        $date: "2024-10-04T13:51:45.545Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-04T13:56:00.733Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:06:30.307Z",
      },
      updatedAt: {
        $date: "2024-10-04T13:56:00.733Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340969",
      },
      name: "Shotaro",
      group: "RIIZE",
      rarity: "1",
      act: "Get a guitar",
      code: "SOGERI1",
      image:
        "https://utfs.io/f/b6b53b7b-a12d-422b-9d24-c080a5c95398-b8h7ds.png",
      releaseDate: {
        $date: "2024-10-04T13:51:45.545Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-04T13:56:09.164Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:07:39.121Z",
      },
      updatedAt: {
        $date: "2024-10-04T13:56:09.164Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734096a",
      },
      name: "Eunseok",
      group: "RIIZE",
      rarity: "1",
      act: "Get a guitar",
      code: "EKGERI1",
      image:
        "https://utfs.io/f/e3f03213-1320-41d6-beaf-00579116bda7-nrmn2w.png",
      releaseDate: {
        $date: "2024-10-04T13:51:45.545Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-04T13:56:20.141Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:07:39.121Z",
      },
      updatedAt: {
        $date: "2024-10-04T13:56:20.141Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734096b",
      },
      name: "Sungchan",
      group: "RIIZE",
      rarity: "1",
      act: "Get a guitar",
      code: "SNGERI1",
      image:
        "https://utfs.io/f/7328ae8d-657a-4531-a2bc-f0d1ca230121-jnosjx.png",
      releaseDate: {
        $date: "2024-10-04T13:51:45.545Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-04T13:56:28.408Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:07:39.121Z",
      },
      updatedAt: {
        $date: "2024-10-04T13:56:28.408Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734096c",
      },
      name: "Wonbin",
      group: "RIIZE",
      rarity: "1",
      act: "Get a guitar",
      code: "WNGERI1",
      image:
        "https://utfs.io/f/d785db35-447d-45a4-aaed-aabab366994c-6rwi0f.png",
      releaseDate: {
        $date: "2024-10-04T13:51:45.545Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-04T13:56:36.478Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:07:39.121Z",
      },
      updatedAt: {
        $date: "2024-10-04T13:56:36.478Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734096d",
      },
      name: "Sohee",
      group: "RIIZE",
      rarity: "1",
      act: "Get a guitar",
      code: "SEGERI1",
      image:
        "https://utfs.io/f/49819332-00db-4570-b31d-39aebc3434ba-germ5k.png",
      releaseDate: {
        $date: "2024-10-04T13:51:45.545Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-04T13:56:51.884Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:07:39.121Z",
      },
      updatedAt: {
        $date: "2024-10-04T13:56:51.884Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734096e",
      },
      name: "Seunghan",
      group: "RIIZE",
      rarity: "1",
      act: "Get a guitar ",
      code: "SHGERI1",
      image:
        "https://utfs.io/f/874d0b76-8b51-4a91-94da-461c569b8b7d-eq1607.png",
      releaseDate: {
        $date: "2024-10-04T13:59:48.680Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-04T14:00:46.749Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:07:39.121Z",
      },
      updatedAt: {
        $date: "2024-10-04T14:00:46.749Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734096f",
      },
      name: "Anton",
      group: "RIIZE",
      rarity: "1",
      act: "Get a guitar ",
      code: "ANGERI1",
      image:
        "https://utfs.io/f/89c9795c-2b14-4ca9-a08b-906237506ede-1tsef6.png",
      releaseDate: {
        $date: "2024-10-04T13:59:48.680Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-04T14:00:55.043Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:07:39.121Z",
      },
      updatedAt: {
        $date: "2024-10-04T14:00:55.043Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340970",
      },
      name: "S.coups",
      group: "Seventeen",
      rarity: "1",
      act: "Your choice",
      code: "SSYOSE1",
      image:
        "https://utfs.io/f/39a3409a-8337-494a-83da-6c9cd4bc5fbd-tsn3n3.png",
      releaseDate: {
        $date: "2024-10-05T05:56:14.714Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-05T06:02:22.896Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:08:46.634Z",
      },
      updatedAt: {
        $date: "2024-10-05T06:02:22.896Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340961",
      },
      name: "Sunghoon",
      group: "ENHYPEN",
      rarity: "1",
      act: "Border : Carnival",
      code: "SNBOEN1",
      image:
        "https://utfs.io/f/7016c40e-64d8-43b6-9d50-f585f3ec9c56-sz5dx0.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-03T13:05:06.065Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:05:20.714Z",
      },
      updatedAt: {
        $date: "2024-10-03T13:05:06.065Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340972",
      },
      name: "Joshua",
      group: "Seventeen",
      rarity: "1",
      act: "Your choice",
      code: "JAYOSE1",
      image:
        "https://utfs.io/f/dc5b7011-f258-405d-b166-e4ecf2fb5928-tsn1ft.png",
      releaseDate: {
        $date: "2024-10-05T05:56:14.714Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-05T06:02:39.908Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:08:46.634Z",
      },
      updatedAt: {
        $date: "2024-10-05T06:02:39.908Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340973",
      },
      name: "Hoshi",
      group: "Seventeen",
      rarity: "1",
      act: "Your choice",
      code: "HIYOSE1",
      image:
        "https://utfs.io/f/218f8179-8836-4c8b-aada-2343b3c6c761-tsmzwq.png",
      releaseDate: {
        $date: "2024-10-05T05:56:14.714Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-05T06:02:58.705Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:08:46.634Z",
      },
      updatedAt: {
        $date: "2024-10-05T06:02:58.705Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340964",
      },
      name: "Jiana",
      group: "YOUNG POSSE",
      rarity: "1",
      act: "Macaroni Cheese",
      code: "JAMAYO1",
      image:
        "https://utfs.io/f/89b0949d-1e14-4e80-a558-9fb43ae2d2cb-dd67bl.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-03T13:07:13.327Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-10-04T18:47:36.388Z",
      },
      updatedAt: {
        $date: "2024-10-03T13:07:13.327Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340975",
      },
      name: "Woozi",
      group: "Seventeen",
      rarity: "1",
      act: "Your choice",
      code: "WIYOSE1",
      image:
        "https://utfs.io/f/eda45647-a452-4ebc-8ac1-a9733bfd1382-tsmyeg.png",
      releaseDate: {
        $date: "2024-10-05T05:56:14.714Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-05T06:03:13.653Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:08:46.634Z",
      },
      updatedAt: {
        $date: "2024-10-05T06:03:13.653Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340976",
      },
      name: "The8",
      group: "Seventeen",
      rarity: "1",
      act: "Your choice",
      code: "T8YOSE1",
      image:
        "https://utfs.io/f/81f4e954-5fed-4144-bed5-bffcc062ebbc-tsmxnl.png",
      releaseDate: {
        $date: "2024-10-05T05:56:14.714Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-05T06:03:24.778Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:08:46.634Z",
      },
      updatedAt: {
        $date: "2024-10-05T06:03:24.778Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340977",
      },
      name: "Mingyu",
      group: "Seventeen",
      rarity: "1",
      act: "Your choice",
      code: "MUYOSE1",
      image:
        "https://utfs.io/f/cbc14056-a272-48e2-90ca-90a11f39856d-tsmwx2.png",
      releaseDate: {
        $date: "2024-10-05T05:56:14.714Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-05T06:03:31.762Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:08:46.634Z",
      },
      updatedAt: {
        $date: "2024-10-05T06:03:31.762Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340978",
      },
      name: "DK",
      group: "Seventeen",
      rarity: "1",
      act: "Your choice",
      code: "DKYOSE1",
      image:
        "https://utfs.io/f/600a9345-5be4-4df2-9e25-2c0f38324d5e-tsmglu.png",
      releaseDate: {
        $date: "2024-10-05T05:56:14.714Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-05T06:03:39.559Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:08:46.634Z",
      },
      updatedAt: {
        $date: "2024-10-05T06:03:39.559Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340979",
      },
      name: "Seungkwan",
      group: "Seventeen",
      rarity: "1",
      act: "Your choice",
      code: "SNYOSE1",
      image:
        "https://utfs.io/f/76845eca-6f75-4461-84c8-82d900dea7f2-tsmfu7.png",
      releaseDate: {
        $date: "2024-10-05T05:56:14.714Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-05T06:03:47.342Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:08:46.634Z",
      },
      updatedAt: {
        $date: "2024-10-05T06:03:47.342Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734097a",
      },
      name: "Vernon",
      group: "Seventeen",
      rarity: "1",
      act: "Your choice",
      code: "VNYOSE1",
      image:
        "https://utfs.io/f/7d7809ac-8db6-4f97-a4ff-6b1baeb1cf89-tsmf4g.png",
      releaseDate: {
        $date: "2024-10-05T05:56:14.714Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-05T06:03:56.169Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:08:46.634Z",
      },
      updatedAt: {
        $date: "2024-10-05T06:03:56.169Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734097b",
      },
      name: "Dino",
      group: "Seventeen",
      rarity: "1",
      act: "Your choice",
      code: "DOYOSE1",
      image:
        "https://utfs.io/f/2be07ad0-4beb-48ab-850b-e85e6cf07530-7ljrvv.png",
      releaseDate: {
        $date: "2024-10-05T05:56:14.714Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-05T06:04:04.946Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:08:46.634Z",
      },
      updatedAt: {
        $date: "2024-10-05T06:04:04.946Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734097c",
      },
      name: "Jun",
      group: "Seventeen",
      rarity: "1",
      act: "Your choice",
      code: "JUYOSE1",
      image:
        "https://utfs.io/f/b02f4e2d-fcf4-4b7a-bd96-2ea78a086aa9-tsn0o4.png",
      releaseDate: {
        $date: "2024-10-05T05:56:14.714Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-05T06:04:38.113Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:08:46.634Z",
      },
      updatedAt: {
        $date: "2024-10-05T06:04:38.113Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734097d",
      },
      name: "Taeyeon",
      group: "Soloist",
      rarity: "1",
      act: "I",
      code: "TNISO1",
      image:
        "https://utfs.io/f/bf6b564a-d99d-45fd-8924-7cc4645e08f3-gwhroy.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-05T07:20:38.455Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:08:05.203Z",
      },
      updatedAt: {
        $date: "2024-10-05T07:20:38.455Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734097e",
      },
      name: "Key",
      group: "Soloist",
      rarity: "1",
      act: "Face",
      code: "KYFASO1",
      image:
        "https://utfs.io/f/ba30ce46-462e-4070-94e1-644ad117fd8d-8acc73.png",
      releaseDate: {
        $date: "2024-10-05T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-05T07:23:47.212Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:06:07.443Z",
      },
      updatedAt: {
        $date: "2024-10-05T07:23:47.212Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac33734097f",
      },
      name: "Yujin",
      group: "Kep1er",
      rarity: "1",
      act: "WA DA DA",
      code: "YNWAKE1",
      image:
        "https://utfs.io/f/42546521-57b4-4065-9a94-7a7e57398530-6kh2di.2.png",
      releaseDate: {
        $date: "2024-10-05T10:56:30.945Z",
      },
      createdBy: {
        $oid: "66d30395f194a44e51d4f906",
      },
      createdAt: {
        $date: "2024-10-05T11:01:31.258Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-05T11:34:29.443Z",
      },
      updatedAt: {
        $date: "2024-10-05T11:01:31.258Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340980",
      },
      name: "Xiaoting",
      group: "Kep1er",
      rarity: "1",
      act: "WA DA DA",
      code: "XGWAKE1",
      image:
        "https://utfs.io/f/bdbeb0cb-870e-4005-a677-66a3ed9e3eaf-2y8zvo.2.png",
      releaseDate: {
        $date: "2024-10-05T10:56:30.945Z",
      },
      createdBy: {
        $oid: "66d30395f194a44e51d4f906",
      },
      createdAt: {
        $date: "2024-10-05T11:01:37.634Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-05T11:35:28.354Z",
      },
      updatedAt: {
        $date: "2024-10-05T11:01:37.634Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340981",
      },
      name: "Mashiro",
      group: "Kep1er",
      rarity: "1",
      act: "WA DA DA",
      code: "MOWAKE1",
      image:
        "https://utfs.io/f/ade3bca1-2b63-4946-93ed-603497283ba3-7cww0s.2.png",
      releaseDate: {
        $date: "2024-10-05T10:56:30.945Z",
      },
      createdBy: {
        $oid: "66d30395f194a44e51d4f906",
      },
      createdAt: {
        $date: "2024-10-05T11:01:44.203Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-05T11:35:28.354Z",
      },
      updatedAt: {
        $date: "2024-10-05T11:01:44.203Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340982",
      },
      name: "Chaehyun",
      group: "Kep1er",
      rarity: "1",
      act: "WA DA DA",
      code: "CNWAKE1",
      image:
        "https://utfs.io/f/b3834e73-e899-4e6d-8115-17326e382a2b-g6f8n6.2.png",
      releaseDate: {
        $date: "2024-10-05T10:56:30.945Z",
      },
      createdBy: {
        $oid: "66d30395f194a44e51d4f906",
      },
      createdAt: {
        $date: "2024-10-05T11:01:49.734Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-05T11:35:28.354Z",
      },
      updatedAt: {
        $date: "2024-10-05T11:01:49.734Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340983",
      },
      name: "Dayeon",
      group: "Kep1er",
      rarity: "1",
      act: "WA DA DA",
      code: "DNWAKE1",
      image:
        "https://utfs.io/f/a0f2d86a-f52c-4168-802c-f617a71ed7e6-1wl4dl.2.png",
      releaseDate: {
        $date: "2024-10-05T10:56:30.945Z",
      },
      createdBy: {
        $oid: "66d30395f194a44e51d4f906",
      },
      createdAt: {
        $date: "2024-10-05T11:01:56.468Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-05T11:35:28.354Z",
      },
      updatedAt: {
        $date: "2024-10-05T11:01:56.468Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340984",
      },
      name: "Bahiyyih",
      group: "Kep1er",
      rarity: "1",
      act: "WA DA DA",
      code: "BHWAKE1",
      image:
        "https://utfs.io/f/b82b3085-e6c4-4a7b-87af-2f6ca7c9b9ab-t2glf6.2.png",
      releaseDate: {
        $date: "2024-10-05T10:56:30.945Z",
      },
      createdBy: {
        $oid: "66d30395f194a44e51d4f906",
      },
      createdAt: {
        $date: "2024-10-05T11:02:17.641Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-05T11:35:28.354Z",
      },
      updatedAt: {
        $date: "2024-10-05T11:02:17.641Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340985",
      },
      name: "Yeseo",
      group: "Kep1er",
      rarity: "1",
      act: "WA DA DA",
      code: "YOWAKE1",
      image:
        "https://utfs.io/f/c753bc89-6be1-4221-a73e-dca0551aef57-5y72y0.2.png",
      releaseDate: {
        $date: "2024-10-05T10:56:30.945Z",
      },
      createdBy: {
        $oid: "66d30395f194a44e51d4f906",
      },
      createdAt: {
        $date: "2024-10-05T11:02:28.030Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-05T11:35:28.354Z",
      },
      updatedAt: {
        $date: "2024-10-05T11:02:28.030Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340971",
      },
      name: "Jeonghan",
      group: "Seventeen",
      rarity: "1",
      act: "Your choice",
      code: "JNYOSE1",
      image:
        "https://utfs.io/f/3ad8a283-830a-4fec-9c17-d9d436fa9896-tsn2tm.png",
      releaseDate: {
        $date: "2024-10-05T05:56:14.714Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-05T06:02:31.536Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:08:46.634Z",
      },
      updatedAt: {
        $date: "2024-10-05T06:02:31.536Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340987",
      },
      name: "Hikaru",
      group: "Kep1er",
      rarity: "1",
      act: "WA DA DA",
      code: "HUWAKE1",
      image:
        "https://utfs.io/f/f84bd0bc-53e0-4f53-9ff1-fd72bf7c2481-hrjtvt.2.png",
      releaseDate: {
        $date: "2024-10-05T11:03:48.015Z",
      },
      createdBy: {
        $oid: "66d30395f194a44e51d4f906",
      },
      createdAt: {
        $date: "2024-10-05T11:07:04.613Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-05T11:35:28.354Z",
      },
      updatedAt: {
        $date: "2024-10-05T11:07:04.613Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340974",
      },
      name: "Wonwoo",
      group: "Seventeen",
      rarity: "1",
      act: "Your choice",
      code: "WOYOSE1",
      image:
        "https://utfs.io/f/32a774ec-3605-4cfa-9624-3cd7e845bf41-tsmz55.png",
      releaseDate: {
        $date: "2024-10-05T05:56:14.714Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-05T06:03:07.156Z",
      },
      approvedBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      approvedAt: {
        $date: "2024-10-05T08:08:46.634Z",
      },
      updatedAt: {
        $date: "2024-10-05T06:03:07.156Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67012bb29ba2dac337340986",
      },
      name: "Youngeun",
      group: "Kep1er",
      rarity: "1",
      act: "WA DA DA",
      code: "YEWAKE1",
      image:
        "https://utfs.io/f/5ff55f3f-20fd-4526-bb7c-b52d58b8e721-lbej57.2.png",
      releaseDate: {
        $date: "2024-10-05T11:03:48.015Z",
      },
      createdBy: {
        $oid: "66d30395f194a44e51d4f906",
      },
      createdAt: {
        $date: "2024-10-05T11:06:29.299Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-05T11:35:28.354Z",
      },
      updatedAt: {
        $date: "2024-10-05T11:06:29.299Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511dea7",
      },
      name: "Dowoon",
      group: "DAY6",
      rarity: "1",
      act: "FOUREVER",
      code: "DNFODA1",
      image:
        "https://utfs.io/f/77f556c1-9bc3-4bd6-b064-92fec45a570b-nx136z.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T09:38:55.610Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T09:38:55.610Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511dea8",
      },
      name: "Wonpil",
      group: "DAY6",
      rarity: "1",
      act: "FOUREVER",
      code: "WLFODA1",
      image:
        "https://utfs.io/f/04369276-45f2-4660-9ecb-35edfeae3a9c-yapube.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T09:39:23.544Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T09:39:23.544Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deaa",
      },
      name: "Sungjin",
      group: "DAY6",
      rarity: "1",
      act: "FOUREVER",
      code: "SNFODA1",
      image:
        "https://utfs.io/f/ad4ae0d3-8aa2-446b-be28-44b6c3b62c9c-e8netf.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T09:41:15.509Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T09:41:15.509Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511dea6",
      },
      name: "Eric Nam",
      group: "Soloist",
      rarity: "1",
      act: "Before We Begin",
      code: "EMBESO1",
      image:
        "https://utfs.io/f/92158ca4-05a9-4059-b52f-fd07a8d30189-ogx81m.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:37:05.888Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:37:05.888Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deac",
      },
      name: "Miyeon",
      group: "(G)I-DLE",
      rarity: "1",
      act: "I Love",
      code: "MNILGI1",
      image:
        "https://utfs.io/f/8965494b-6629-400a-a9d1-117c3e04819c-hr9fnd.png",
      releaseDate: {
        $date: "2024-10-18T23:02:23.224Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-10-18T23:06:03.714Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-18T23:06:03.714Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511dead",
      },
      name: "Shuhua",
      group: "(G)I-DLE",
      rarity: "1",
      act: "I Love",
      code: "SAILGI1",
      image:
        "https://utfs.io/f/d7326e56-d963-40dd-a213-41c7a30e92c2-exlzgs.png",
      releaseDate: {
        $date: "2024-10-18T23:02:23.224Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-10-18T23:06:12.703Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-18T23:06:12.703Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deae",
      },
      name: "Soyeon",
      group: "(G)I-DLE",
      rarity: "1",
      act: "I Love",
      code: "SNILGI1",
      image:
        "https://utfs.io/f/8bd36390-dc4c-4744-9eb7-6a2adff716fe-etoxq1.png",
      releaseDate: {
        $date: "2024-10-18T23:02:23.224Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-10-18T23:06:21.383Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-18T23:06:21.383Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deaf",
      },
      name: "Yuqi",
      group: "(G)I-DLE",
      rarity: "1",
      act: "I Love",
      code: "YIILGI1",
      image: "https://utfs.io/f/68850af2-e09d-4f29-88bc-4a6a845facce-27qyc.png",
      releaseDate: {
        $date: "2024-10-18T23:02:23.224Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-10-18T23:06:27.184Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-18T23:06:27.184Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deb0",
      },
      name: "Ha Sungwoon",
      group: "Soloist",
      rarity: "1",
      act: "You",
      code: "HNYOSO1",
      image:
        "https://utfs.io/f/23422c6b-c63a-477b-acf7-2e1631485204-b3zcdh.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:17:49.688Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:17:49.688Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deb1",
      },
      name: "Jessica",
      group: "SNSD",
      rarity: "1",
      act: "I Got a Boy",
      code: "JAIGSN1",
      image:
        "https://utfs.io/f/931f9a00-d2f2-48d3-9bfc-e717756b4f52-y52gfb.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:39:01.626Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:39:01.626Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deb2",
      },
      name: "Sooyoung",
      group: "SNSD",
      rarity: "1",
      act: "I Got a Boy",
      code: "SGIGSN1",
      image:
        "https://utfs.io/f/b6175f67-acf3-4a8f-b3b3-08e20b623c79-ejyhx0.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:39:11.214Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:39:11.214Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511dea9",
      },
      name: "Young K",
      group: "DAY6",
      rarity: "1",
      act: "FOUREVER",
      code: "YKFODA1",
      image:
        "https://utfs.io/f/b5f1ca85-0771-4277-95b1-859090ce3be7-96z0lo.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T09:39:31.292Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T09:39:31.292Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deab",
      },
      name: "Minnie",
      group: "(G)I-DLE",
      rarity: "1",
      act: "I Love",
      code: "MEILGI1",
      image:
        "https://utfs.io/f/8822cf78-b397-4a5d-a2c8-e351a8836a87-hrg9zc.png",
      releaseDate: {
        $date: "2024-10-18T23:02:23.224Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-10-18T23:05:57.728Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-18T23:05:57.728Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deb5",
      },
      name: "Tiffany",
      group: "SNSD",
      rarity: "1",
      act: "I Got a Boy",
      code: "TYIGSN1",
      image:
        "https://utfs.io/f/883a446c-a098-4a66-94f7-e07eab3e4b6b-rqcub4.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:39:39.574Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:39:39.574Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deb6",
      },
      name: "Yoona",
      group: "SNSD",
      rarity: "1",
      act: "I Got a Boy",
      code: "YAIGSN1",
      image:
        "https://utfs.io/f/ab31e957-27cd-4584-b2ab-baedc2656139-2lywzf.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:39:49.298Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:39:49.298Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deb7",
      },
      name: "Hyoyeon",
      group: "SNSD",
      rarity: "1",
      act: "I Got a Boy",
      code: "HNIGSN1",
      image:
        "https://utfs.io/f/e812bf28-939a-4383-b5df-32e70d1ef36a-eo8qft.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:45:15.837Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:45:15.837Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deb8",
      },
      name: "Seohyun",
      group: "SNSD",
      rarity: "1",
      act: "I Got a Boy",
      code: "SNIGSN1",
      image:
        "https://utfs.io/f/3a83f630-8ed3-444b-8a5b-717f674f1213-r1oe11.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:45:24.090Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:45:24.090Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deb9",
      },
      name: "Yuri",
      group: "SNSD",
      rarity: "1",
      act: "I Got a Boy",
      code: "YIIGSN1",
      image:
        "https://utfs.io/f/61857d50-87cf-405b-8750-43509470f3aa-yhzqdb.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:45:32.733Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:45:32.733Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deba",
      },
      name: "Nayeon",
      group: "Soloist",
      rarity: "1",
      act: "POP!",
      code: "NNPOSO1",
      image:
        "https://utfs.io/f/34043d41-64b7-4994-8c4f-7c2f25757b88-wk22ma.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:45:39.780Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:45:39.780Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511debb",
      },
      name: "Eric",
      group: "THE BOYZ",
      rarity: "1",
      act: "Bloom Bloom",
      code: "ECBLTH1",
      image:
        "https://utfs.io/f/ef92b38b-9117-4ed7-9fb6-371948cf166c-g0ljia.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:48:03.354Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:48:03.354Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511debc",
      },
      name: "Hyunjae",
      group: "THE BOYZ",
      rarity: "1",
      act: "Bloom Bloom",
      code: "HEBLTH1",
      image:
        "https://utfs.io/f/426b6706-36b5-4c7f-8257-6a0a35c52037-286lri.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:48:29.039Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:48:29.039Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511debd",
      },
      name: "Jacob",
      group: "THE BOYZ",
      rarity: "1",
      act: "Bloom Bloom",
      code: "JBBLTH1",
      image:
        "https://utfs.io/f/60f7575f-688d-425d-886c-4b7aa21993a1-qqhs9j.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:48:39.255Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:48:39.255Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511debe",
      },
      name: "Juhaknyeon",
      group: "THE BOYZ",
      rarity: "1",
      act: "Bloom Bloom",
      code: "JNBLTH1",
      image:
        "https://utfs.io/f/15e0d696-c4df-48d6-a0eb-3556677ddf9d-eeaipk.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:48:46.206Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:48:46.206Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511debf",
      },
      name: "Kevin",
      group: "THE BOYZ",
      rarity: "1",
      act: "Bloom Bloom",
      code: "KNBLTH1",
      image:
        "https://utfs.io/f/450adc6f-f08e-4154-8b60-bb3d42f36444-4zfc4w.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:49:00.192Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:49:00.192Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511dec0",
      },
      name: "New",
      group: "THE BOYZ",
      rarity: "1",
      act: "Bloom Bloom",
      code: "NWBLTH1",
      image:
        "https://utfs.io/f/f3efa57b-1459-41b3-b435-4b67205dcc0e-wcgwdm.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:49:09.547Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:49:09.547Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511dec1",
      },
      name: "Q",
      group: "THE BOYZ",
      rarity: "1",
      act: "Bloom Bloom",
      code: "QQBLTH1",
      image:
        "https://utfs.io/f/fe41d3f7-a7f3-462d-a50f-c9633eff893f-xt8jej.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:49:19.733Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:49:19.733Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511dec2",
      },
      name: "Sangyeon",
      group: "THE BOYZ",
      rarity: "1",
      act: "Bloom Bloom",
      code: "SNBLTH1",
      image:
        "https://utfs.io/f/83a373a5-8052-4407-98fc-94cf614d103d-uf4w6g.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:49:28.151Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:49:28.151Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deb3",
      },
      name: "Sunny",
      group: "SNSD",
      rarity: "1",
      act: "I Got a Boy",
      code: "SYIGSN1",
      image:
        "https://utfs.io/f/c89d9f7b-9ad2-4ee9-9845-9bcc19fe2aa9-2p5vcg.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:39:20.032Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:39:20.032Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511dec4",
      },
      name: "Younghoon",
      group: "THE BOYZ",
      rarity: "1",
      act: "Bloom Bloom",
      code: "YNBLTH1",
      image:
        "https://utfs.io/f/536a8ef2-53ae-4a86-88d3-f591a13f7428-5kht6g.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:49:46.173Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:49:46.173Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511dec5",
      },
      name: "Hwall",
      group: "THE BOYZ",
      rarity: "1",
      act: "Bloom Bloom",
      code: "HLBLTH1",
      image:
        "https://utfs.io/f/8d3a0810-5276-4326-b530-e833bda9ffb8-qr7dac.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:50:42.608Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:50:42.608Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511deb4",
      },
      name: "Taeyeon",
      group: "SNSD",
      rarity: "1",
      act: "I Got a Boy",
      code: "TNIGSN1",
      image:
        "https://utfs.io/f/1fdb406d-40c2-4f59-946f-f217617bedd4-vixebo.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:39:28.124Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:39:28.124Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f44fd619acbc511dec3",
      },
      name: "Sunwoo",
      group: "THE BOYZ",
      rarity: "1",
      act: "Bloom Bloom",
      code: "SOBLTH1",
      image:
        "https://utfs.io/f/23ea3d9b-1936-43ea-b64f-05dce7a75336-s4n03l.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:49:36.873Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:03.213Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:49:36.873Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67139f6081672862cc97e413",
      },
      name: "Juyeon",
      group: "THE BOYZ",
      rarity: "1",
      act: "Bloom Bloom",
      code: "JYBLTH1",
      image:
        "https://utfs.io/f/5647a309-883c-49cb-8167-0ac763e27fd1-nvf224.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-19T11:50:49.106Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T12:00:30.378Z",
      },
      updatedAt: {
        $date: "2024-10-19T11:50:49.106Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47a9e",
      },
      name: "Dahyun",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "DNASTR1",
      image:
        "https://utfs.io/f/a77913ee-fe68-434b-977a-b1d5a2c3652b-aw04n4.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:19:00.025Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:47:00.625Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:19:00.025Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47a9f",
      },
      name: "Hayeon",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "HNASTR1",
      image:
        "https://utfs.io/f/f718d28a-8924-457a-9324-0c83f2bddffb-giqa77.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:19:10.341Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:47:00.625Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:19:10.341Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aa1",
      },
      name: "Jiyeon",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "JNASTR1",
      image:
        "https://utfs.io/f/bb6b4a9b-61c0-4322-bb5f-cc7939c906b6-150ql9.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:19:46.008Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:47:55.028Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:19:46.008Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47a9d",
      },
      name: "Chaewon",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "CNASTR1",
      image:
        "https://utfs.io/f/7dadad65-e5d2-4780-afe6-5e266b4a734c-grjq9y.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:18:39.004Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:47:00.625Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:18:39.004Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aa3",
      },
      name: "Lynn",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "LNASTR1",
      image:
        "https://utfs.io/f/e5ea4ac8-2a3c-43e1-a680-7279c282ed48-xkqmqi.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:20:29.282Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:15.626Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:20:29.282Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aa4",
      },
      name: "Mayu",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "MUASTR1",
      image:
        "https://utfs.io/f/954e52e6-5b30-4d2d-91ec-aabf0a1b6c85-1bek47.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:20:41.309Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:15.626Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:20:41.309Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aa5",
      },
      name: "Nakyoung",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "NGASTR1",
      image:
        "https://utfs.io/f/b36fdf9e-6e85-4f90-8395-2748d82de150-vg7qih.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:20:50.458Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:15.626Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:20:50.458Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aa6",
      },
      name: "Nien",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "NNASTR1",
      image:
        "https://utfs.io/f/89ad18da-79ab-4e89-b522-5c7b63a2117c-9ollp9.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:21:07.853Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:15.626Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:21:07.853Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aa7",
      },
      name: "Seoah",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "SHASTR1",
      image:
        "https://utfs.io/f/5fabbec4-ee68-481b-8372-6937b53fe2df-ysfvrx.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:21:20.795Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:15.626Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:21:20.795Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aa8",
      },
      name: "Chaeyeon",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "CYASTR1",
      image:
        "https://utfs.io/f/a22c7160-d17d-4216-a15b-002116085992-vp8iel.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:23:07.322Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:15.626Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:23:07.322Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aa0",
      },
      name: "Jiwoo",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "JOASTR1",
      image:
        "https://utfs.io/f/52773f40-722c-46df-b577-88df6d9bf20c-w71i9d.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:19:28.732Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:47:55.028Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:19:28.732Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aaa",
      },
      name: "Kotone",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "KOASTR1",
      image:
        "https://utfs.io/f/f6f026a5-a2a1-4a68-9644-b5e0243e92ec-w6xzin.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:28:46.125Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:15.626Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:28:46.125Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aab",
      },
      name: "Joobin",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "JBASTR1",
      image:
        "https://utfs.io/f/33a61247-982f-4470-8e97-c151f90dc142-a3cn1m.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:28:58.752Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:15.626Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:28:58.752Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aac",
      },
      name: "Seoyeon",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "SNASTR1",
      image:
        "https://utfs.io/f/d0eca1ae-dad4-4762-beee-f94ab213d216-ldcxa9.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:29:13.562Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:15.626Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:29:13.562Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aa2",
      },
      name: "Kaede",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "KEASTR1",
      image:
        "https://utfs.io/f/b6fcf09a-43e2-4c0a-9cbd-90976545666e-8sk2mh.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:20:05.919Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:47:55.028Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:20:05.919Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aae",
      },
      name: "Xinyu",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "XUASTR1",
      image:
        "https://utfs.io/f/b683cce0-dc03-418f-8aef-b7f23cc6e985-shh432.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:29:37.868Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:15.626Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:29:37.868Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aaf",
      },
      name: "Yooyeon",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "YNASTR1",
      image:
        "https://utfs.io/f/7b442b1e-8978-496f-bbfb-03e31cbdc7fe-z91zgd.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:29:50.317Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:15.626Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:29:50.317Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47ab0",
      },
      name: "Shion",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "SOASTR1",
      image:
        "https://utfs.io/f/dfa9d257-15ce-434f-b903-371792d2f266-5x9m2c.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:35:51.159Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:15.626Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:35:51.159Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47ab1",
      },
      name: "Sohyun",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "SYASTR1",
      image:
        "https://utfs.io/f/76809451-010d-48da-b638-b436e1d284fd-a4y39b.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:36:05.103Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:15.626Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:36:05.103Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47ab2",
      },
      name: "Soomin",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "SMASTR1",
      image:
        "https://utfs.io/f/83c46227-fed3-48c5-8de4-29dcd5f5ef6c-l2eltk.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:36:22.419Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:53:26.757Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:36:22.419Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47ab3",
      },
      name: "Sullin",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "SLASTR1",
      image:
        "https://utfs.io/f/8314d3ca-7e37-46ad-b62e-a5f618e620c5-dxll40.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:36:35.952Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:53:26.757Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:36:35.952Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47ab4",
      },
      name: "Yubin",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "YBASTR1",
      image:
        "https://utfs.io/f/39bef2f6-2db2-49f5-8e02-7c0cac89d753-uk2on0.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:36:49.782Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:53:26.757Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:36:49.782Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47ab5",
      },
      name: "BIBI",
      group: "Soloist",
      rarity: "1",
      act: "Life Is a Bi...",
      code: "BILISO1",
      image: "https://utfs.io/f/3a6a2558-9fca-4b53-b495-77d293decb84-1sszy.png",
      releaseDate: {
        $date: "2024-10-18T23:02:23.224Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-10-18T23:06:33.159Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:56.022Z",
      },
      updatedAt: {
        $date: "2024-10-18T23:06:33.159Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aa9",
      },
      name: "Hyerin",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "HYASTR1",
      image:
        "https://utfs.io/f/0f666520-453e-4671-93ec-482addc5351d-e1wloc.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:28:31.937Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:15.626Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:28:31.937Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6713a1c0af7fd7d7ccf47aad",
      },
      name: "Yeonji",
      group: "tripleS",
      rarity: "1",
      act: "ASSEMBLE24",
      code: "YIASTR1",
      image:
        "https://utfs.io/f/7f3dd082-d224-4a10-8a35-1e5dc8835d54-40g259.png",
      releaseDate: {
        $date: "2024-10-19T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-17T18:29:27.129Z",
      },
      approvedBy: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-10-19T11:52:15.626Z",
      },
      updatedAt: {
        $date: "2024-10-17T18:29:27.129Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262248a72b7859dfd38304",
      },
      name: "Seulgi",
      group: "Red Velvet",
      rarity: "1",
      act: "Umpah umpah",
      code: "SIUMRE1",
      image:
        "https://utfs.io/f/05ddc684-282d-43b5-ba13-8cf3c2a0ee35-ogzol6.png",
      releaseDate: {
        $date: "2024-10-20T14:05:23.316Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-20T14:09:18.744Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-02T12:59:50.640Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-10-20T14:09:18.744Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262248a72b7859dfd38305",
      },
      name: "Wendy",
      group: "Red Velvet",
      rarity: "1",
      act: "Umpah umpah",
      code: "WYUMRE1",
      image:
        "https://utfs.io/f/0ccbd75d-fc8c-46f7-9c8f-d0d2d9c3c13a-ogzpbt.png",
      releaseDate: {
        $date: "2024-10-20T14:05:23.316Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-20T14:09:26.688Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-02T12:59:50.640Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-10-20T14:09:26.688Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262248a72b7859dfd38307",
      },
      name: "Yeri",
      group: "Red Velvet",
      rarity: "1",
      act: "Umpah umpah",
      code: "YIUMRE1",
      image:
        "https://utfs.io/f/31bc4c9c-8a34-4e12-8cba-063db93b1dd0-ogzqpv.png",
      releaseDate: {
        $date: "2024-10-20T14:05:23.316Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-20T14:09:47.653Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-02T12:59:50.640Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-10-20T14:09:47.653Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262248a72b7859dfd38303",
      },
      name: "Choi Yena",
      group: "Soloist",
      rarity: "1",
      act: "SMiLEY",
      code: "CASMSO1",
      image:
        "https://utfs.io/f/1e909892-e415-4bfe-afe7-33e60741f41b-ogz3tw.png",
      releaseDate: {
        $date: "2024-10-20T14:05:23.316Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-20T14:09:07.738Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-02T12:59:50.640Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-10-20T14:09:07.738Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262248a72b7859dfd38309",
      },
      name: "Yuki",
      group: "Purple Kiss",
      rarity: "1",
      act: "Memem",
      code: "YIMEPU1",
      image: "https://utfs.io/f/46eb7516-7856-4c9e-8c47-06222b04ccc3-27qt6.png",
      releaseDate: {
        $date: "2024-11-02T12:33:41.426Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-11-02T12:38:50.040Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-02T12:59:50.640Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:38:50.040Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262248a72b7859dfd3830a",
      },
      name: "Jieun",
      group: "Purple Kiss",
      rarity: "1",
      act: "Memem",
      code: "JNMEPU1",
      image:
        "https://utfs.io/f/66f1dfeb-e8ab-4253-9b11-32ece8957bd1-1o7ean.png",
      releaseDate: {
        $date: "2024-11-02T12:33:41.426Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-11-02T12:39:02.589Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-02T12:59:50.640Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:39:02.589Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262248a72b7859dfd3830b",
      },
      name: "Swan",
      group: "Purple Kiss",
      rarity: "1",
      act: "Memem",
      code: "SNMEPU1",
      image: "https://utfs.io/f/04c1b487-071b-493c-a80c-7f692f84da28-23y4x.png",
      releaseDate: {
        $date: "2024-11-02T12:33:41.426Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-11-02T12:38:56.684Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-02T12:59:50.640Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:38:56.684Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262248a72b7859dfd3830c",
      },
      name: "Na Goeun",
      group: "Purple Kiss",
      rarity: "1",
      act: "Memem",
      code: "NNMEPU1",
      image:
        "https://utfs.io/f/fc59a570-aa88-4b5e-89e4-bd94c75e8d37-1mnufq.png",
      releaseDate: {
        $date: "2024-11-02T12:33:41.426Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-11-02T12:39:15.973Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-02T12:59:50.640Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:39:15.973Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262248a72b7859dfd3830d",
      },
      name: "Ireh",
      group: "Purple Kiss",
      rarity: "1",
      act: "Memem",
      code: "IHMEPU1",
      image: "https://utfs.io/f/76122327-943d-4603-9ebd-153cf760d3c3-1xgng.png",
      releaseDate: {
        $date: "2024-11-02T12:33:41.426Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-11-02T12:39:08.771Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-02T12:59:50.640Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:39:08.771Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262248a72b7859dfd3830e",
      },
      name: "Dosie",
      group: "Purple Kiss",
      rarity: "1",
      act: "Memem",
      code: "DEMEPU1",
      image:
        "https://utfs.io/f/c33228dc-7552-4769-a060-275b463ba85c-1l0qqs.png",
      releaseDate: {
        $date: "2024-11-02T12:33:41.426Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-11-02T12:39:21.909Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-02T12:59:50.640Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:39:21.909Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262248a72b7859dfd3830f",
      },
      name: "Chaein",
      group: "Purple Kiss",
      rarity: "1",
      act: "Memem",
      code: "CNMEPU1",
      image:
        "https://utfs.io/f/5990c941-a697-452d-ba2d-17ad92f25265-mios0i.png",
      releaseDate: {
        $date: "2024-11-02T12:33:41.426Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-11-02T12:39:31.186Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-02T12:59:50.640Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:39:31.186Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262248a72b7859dfd38306",
      },
      name: "Joy",
      group: "Red Velvet",
      rarity: "1",
      act: "Umpah umpah",
      code: "JYUMRE1",
      image:
        "https://utfs.io/f/35e215a1-cb8b-4124-aaef-a5652010a2df-ogzq0u.png",
      releaseDate: {
        $date: "2024-10-20T14:05:23.316Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-20T14:09:37.095Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-02T12:59:50.640Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-10-20T14:09:37.095Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262248a72b7859dfd38308",
      },
      name: "Irene",
      group: "Red Velvet",
      rarity: "1",
      act: "Umpah umpah",
      code: "IEUMRE1",
      image:
        "https://utfs.io/f/eb23224b-c692-449e-bf51-07d02cbf0159-ogzs6g.png",
      releaseDate: {
        $date: "2024-10-20T14:05:23.316Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-10-20T14:09:54.200Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-02T12:59:50.640Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-10-20T14:09:54.200Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262248a72b7859dfd38310",
      },
      name: "DPR IAN",
      group: "Soloist",
      rarity: "1",
      act: "MITO",
      code: "DNMISO1",
      image:
        "https://utfs.io/f/f794ca27-bab2-4c7f-b731-6516d1a47119-t4nmes.png",
      releaseDate: {
        $date: "2024-11-02T12:33:41.426Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-11-02T12:39:37.298Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-02T12:59:50.640Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:39:37.298Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "672622cef07de89fe6355d17",
      },
      name: "Eunchae",
      group: "LE SSERAFIM",
      rarity: "1",
      act: "Antifragile",
      code: "EEANLE1",
      image:
        "https://utfs.io/f/b053113e-0d3d-4ab3-a9a8-e60cfbfed0e0-la8kiq.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-01T07:57:03.602Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:02:05.266Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-01T07:57:03.602Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "672622cef07de89fe6355d18",
      },
      name: "Kazuha",
      group: "LE SSERAFIM",
      rarity: "1",
      act: "Antifragile",
      code: "KAANLE1",
      image:
        "https://utfs.io/f/f934bbd3-68a5-4129-9611-d2f90991e483-spgjdx.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-01T07:57:11.155Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:02:05.266Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-01T07:57:11.155Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "672622cef07de89fe6355d16",
      },
      name: "Chaewon",
      group: "LE SSERAFIM",
      rarity: "1",
      act: "Antifragile",
      code: "CNANLE1",
      image:
        "https://utfs.io/f/1a79cccb-d1ac-4fbe-8005-78b387cbeb2e-rmpdzc.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-01T07:56:57.119Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:02:05.266Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-01T07:56:57.119Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "672622cef07de89fe6355d19",
      },
      name: "Sakura",
      group: "LE SSERAFIM",
      rarity: "1",
      act: "Antifragile",
      code: "SAANLE1",
      image:
        "https://utfs.io/f/9290623c-483f-400c-a914-d9dc06c5b191-vmos5e.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-01T07:57:18.555Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:02:05.266Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-01T07:57:18.555Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "672622cef07de89fe6355d1a",
      },
      name: "Yunjin",
      group: "LE SSERAFIM",
      rarity: "1",
      act: "Antifragile",
      code: "YNANLE1",
      image:
        "https://utfs.io/f/27bfe339-26b2-4d83-a286-7cd32a5f3164-yd9i8o.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-01T07:57:28.881Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:02:05.266Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-01T07:57:28.881Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6726232df07de89fe6355d25",
      },
      name: "Gyuvin",
      group: "ZEROBASEONE",
      rarity: "1",
      act: "Feel The Pop",
      code: "GNFEZE1",
      image:
        "https://utfs.io/f/1198f86e-7dac-4c99-aa52-5d08ace35ac2-xg339g.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T10:24:15.318Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:03:40.836Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T10:24:15.318Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6726232df07de89fe6355d27",
      },
      name: "Jiwoong",
      group: "ZEROBASEONE",
      rarity: "1",
      act: "Feel The Pop",
      code: "JGFEZE1",
      image:
        "https://utfs.io/f/881344cc-2abd-4f2e-a067-d532a1f35793-h6oet1.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T10:24:32.341Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:03:40.836Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T10:24:32.341Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6726232df07de89fe6355d26",
      },
      name: "Hanbin",
      group: "ZEROBASEONE",
      rarity: "1",
      act: "Feel The Pop",
      code: "HNFEZE1",
      image:
        "https://utfs.io/f/1d6aac67-2ed1-4dc1-a0ab-f50e7be463cd-jzmjmy.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T10:24:24.183Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:03:40.836Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T10:24:24.183Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6726232df07de89fe6355d28",
      },
      name: "Matthew",
      group: "ZEROBASEONE",
      rarity: "1",
      act: "Feel The Pop",
      code: "MWFEZE1",
      image:
        "https://utfs.io/f/8de826b1-130f-4510-aa16-f3ff698dc7b1-jbltyu.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T10:24:44.148Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:03:40.836Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T10:24:44.148Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6726232df07de89fe6355d24",
      },
      name: "Gunwook",
      group: "ZEROBASEONE",
      rarity: "1",
      act: "Feel The Pop",
      code: "GKFEZE1",
      image:
        "https://utfs.io/f/bf8fd850-52b8-441f-8882-f04c06700c30-gijt2w.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T10:24:04.427Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:03:40.836Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T10:24:04.427Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6726232df07de89fe6355d2b",
      },
      name: "Yujin",
      group: "ZEROBASEONE",
      rarity: "1",
      act: "Feel The Pop",
      code: "YNFEZE1",
      image:
        "https://utfs.io/f/2149d3ab-aaa6-4f67-8fec-e7e985ed4409-qxrayf.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T10:25:15.022Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:03:40.836Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T10:25:15.022Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6726232df07de89fe6355d2c",
      },
      name: "Zhang Hao",
      group: "ZEROBASEONE",
      rarity: "1",
      act: "Feel The Pop",
      code: "ZOFEZE1",
      image:
        "https://utfs.io/f/cf2ee069-7885-4cf0-8352-5a85cbe2a1df-ymybsq.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T10:25:24.090Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:03:40.836Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T10:25:24.090Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6726232df07de89fe6355d29",
      },
      name: "Ricky",
      group: "ZEROBASEONE",
      rarity: "1",
      act: "Feel The Pop",
      code: "RYFEZE1",
      image:
        "https://utfs.io/f/e57892ab-08e3-44b6-aa5d-1f76950d0813-j09ptq.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T10:24:52.291Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:03:40.836Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T10:24:52.291Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6726232df07de89fe6355d2a",
      },
      name: "Taerae",
      group: "ZEROBASEONE",
      rarity: "1",
      act: "Feel The Pop",
      code: "TEFEZE1",
      image:
        "https://utfs.io/f/0aa1fb8a-c2a4-40b8-9a38-a06e7f090361-jvscla.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T10:25:05.917Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:03:40.836Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T10:25:05.917Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "6726234ec3680a9d4e8b884c",
      },
      name: "Jo Yuri",
      group: "Soloist",
      rarity: "1",
      act: "Glassy",
      code: "JIGLSO1",
      image:
        "https://utfs.io/f/35b168e3-1347-4269-b92d-7c4270c899fb-8ptog9.png",
      releaseDate: {
        $date: "2024-11-02T12:30:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T12:05:15.973Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:04:12.953Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:05:15.973Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262377f07de89fe6355d3b",
      },
      name: "Johnny",
      group: "NCT 127",
      rarity: "1",
      act: "Neo Zone: TFR",
      code: "JYNENC1",
      image:
        "https://utfs.io/f/24f30cef-0d2a-456c-b2e4-21f04a1b49f7-94rmfj.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-01T07:53:31.431Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:04:54.636Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-01T07:53:31.431Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262377f07de89fe6355d3d",
      },
      name: "Mark",
      group: "NCT 127",
      rarity: "1",
      act: "Neo Zone: TFR",
      code: "MKNENC1",
      image:
        "https://utfs.io/f/f05a6f51-0af8-408e-b004-1abfe5917046-3buoey.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-01T07:53:48.610Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:04:54.636Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-01T07:53:48.610Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262377f07de89fe6355d3c",
      },
      name: "Jungwoo",
      group: "NCT 127",
      rarity: "1",
      act: "Neo Zone: TFR",
      code: "JONENC1",
      image:
        "https://utfs.io/f/1ab6ecfa-a6b3-4db1-b631-3183dc5a93bd-twh1f0.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-01T07:53:40.960Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:04:54.636Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-01T07:53:40.960Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262377f07de89fe6355d39",
      },
      name: "Haechan",
      group: "NCT 127",
      rarity: "1",
      act: "Neo Zone: TFR",
      code: "HNNENC1",
      image:
        "https://utfs.io/f/3662be18-77b1-4692-9b81-fdedf28c1cb6-qrooix.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-01T07:53:14.165Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:04:54.636Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-01T07:53:14.165Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262377f07de89fe6355d3e",
      },
      name: "Taeyong",
      group: "NCT 127",
      rarity: "1",
      act: "Neo Zone: TFR",
      code: "TGNENC1",
      image:
        "https://utfs.io/f/24641f27-5ede-4e68-b6c8-d9b1fdd1fe28-o4vev4.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-01T07:53:55.378Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:04:54.636Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-01T07:53:55.378Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262377f07de89fe6355d3a",
      },
      name: "Jaehyun",
      group: "NCT 127",
      rarity: "1",
      act: "Neo Zone: TFR",
      code: "JNNENC1",
      image:
        "https://utfs.io/f/949023d7-7680-4bfd-89e2-f2581c886b42-e7c7n5.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-01T07:53:24.210Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:04:54.636Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-01T07:53:24.210Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262377f07de89fe6355d38",
      },
      name: "Doyoung",
      group: "NCT 127",
      rarity: "1",
      act: "Neo Zone: TFR",
      code: "DGNENC1",
      image:
        "https://utfs.io/f/6fde3034-dca6-4c94-84c3-6a489300722e-rml93a.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-01T07:53:06.689Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:04:54.636Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-01T07:53:06.689Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "67262377f07de89fe6355d3f",
      },
      name: "Yuta",
      group: "NCT 127",
      rarity: "1",
      act: "Neo Zone: TFR",
      code: "YANENC1",
      image:
        "https://utfs.io/f/7c3a5e7c-b8fa-453b-a476-d8ec41d3efa2-9phkwy.png",
      releaseDate: {
        $date: "2024-11-02T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-01T07:54:05.598Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:04:54.636Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-01T07:54:05.598Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "672623a7c3680a9d4e8b8851",
      },
      name: "I.M",
      group: "MONSTA X",
      rarity: "1",
      act: "One of a Kind",
      code: "IMONMO1",
      image:
        "https://utfs.io/f/ff315977-44ab-42ca-a4d8-f7fd2f3b8cbc-smlafn.png",
      releaseDate: {
        $date: "2024-11-02T12:30:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T12:04:32.564Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:05:42.379Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:04:32.564Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "672623a7c3680a9d4e8b8852",
      },
      name: "Joohoney",
      group: "MONSTA X",
      rarity: "1",
      act: "One of a Kind",
      code: "JYONMO1",
      image:
        "https://utfs.io/f/23869045-e04c-4b82-9f21-0041c21de995-lj4zz4.png",
      releaseDate: {
        $date: "2024-11-02T12:30:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T12:04:40.495Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:05:42.379Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:04:40.495Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "672623a7c3680a9d4e8b8850",
      },
      name: "Hyungwon",
      group: "MONSTA X",
      rarity: "1",
      act: "One of a Kind",
      code: "HNONMO1",
      image:
        "https://utfs.io/f/af46475b-8778-47ae-8c99-c78176c2aced-85vxw8.png",
      releaseDate: {
        $date: "2024-11-02T12:30:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T12:04:25.758Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:05:42.379Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:04:25.758Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "672623a7c3680a9d4e8b8855",
      },
      name: "Shownu",
      group: "MONSTA X",
      rarity: "1",
      act: "One of a Kind",
      code: "SUONMO1",
      image:
        "https://utfs.io/f/d15842e4-98aa-4ef2-990b-a63e92eb243c-wbiokz.png",
      releaseDate: {
        $date: "2024-11-02T12:30:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T12:05:06.671Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:05:42.379Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:05:06.671Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "672623a7c3680a9d4e8b8853",
      },
      name: "Minhyuk",
      group: "MONSTA X",
      rarity: "1",
      act: "One of a Kind",
      code: "MKONMO1",
      image:
        "https://utfs.io/f/1ccf87df-74c2-42b9-b0fd-33ce8596ee1c-8t0x60.png",
      releaseDate: {
        $date: "2024-11-02T12:30:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T12:04:48.625Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:05:42.379Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:04:48.625Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "672623a7c3680a9d4e8b8854",
      },
      name: "Kihyun",
      group: "MONSTA X",
      rarity: "1",
      act: "One of a Kind",
      code: "KNONMO1",
      image:
        "https://utfs.io/f/edd42e3d-8507-4d31-8967-c1ce09c75aeb-i9qm6h.png",
      releaseDate: {
        $date: "2024-11-02T12:30:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T12:04:56.046Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:05:42.379Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:04:56.046Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "672623d01bfb7eddf1cd5162",
      },
      name: "WOODZ",
      group: "Soloist",
      rarity: "1",
      act: "Woops!",
      code: "WZWOSO1",
      image:
        "https://utfs.io/f/543b158b-5aed-4eb5-b153-fc95e547492e-cqb3ot.png",
      releaseDate: {
        $date: "2024-11-02T12:30:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-02T12:05:26.303Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-02T13:06:23.361Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-02T12:05:26.303Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48b9",
      },
      name: "Winter",
      group: "Aespa",
      rarity: "2",
      act: "Better things",
      code: "WRBEAE2",
      image:
        "https://utfs.io/f/223e38b6-7c5a-45e8-992c-7b402250b581-n6rljt.png",
      releaseDate: {
        $date: "2024-11-13T17:30:51.546Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-13T17:34:00.923Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:58:09.813Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-13T17:34:00.923Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48ba",
      },
      name: "Ningning",
      group: "Aespa",
      rarity: "2",
      act: "Better things",
      code: "NGBEAE2",
      image:
        "https://utfs.io/f/ad5833b4-bb1a-4dc9-808e-f6f291d66830-n6rino.png",
      releaseDate: {
        $date: "2024-11-13T17:30:51.546Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-13T17:34:11.210Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:58:09.813Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-13T17:34:11.210Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48bc",
      },
      name: "Jaehyun",
      group: "Boynextdoor",
      rarity: "1",
      act: "Who!",
      code: "JNWHBO1",
      image:
        "https://utfs.io/f/8d451fac-7e50-4f7e-b496-763da69ab28d-f2m2hx.png",
      releaseDate: {
        $date: "2024-11-13T17:39:15.803Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-13T17:42:15.409Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:54:22.687Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-13T17:42:15.409Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48bd",
      },
      name: "Riwoo",
      group: "Boynextdoor",
      rarity: "1",
      act: "Who!",
      code: "ROWHBO1",
      image:
        "https://utfs.io/f/6f1b1288-2acb-44df-8078-04bcb82b3002-f2m0yt.png",
      releaseDate: {
        $date: "2024-11-13T17:39:15.803Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-13T17:42:25.938Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:54:22.687Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-13T17:42:25.938Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48b8",
      },
      name: "Karina",
      group: "Aespa",
      rarity: "2",
      act: "Better things",
      code: "KABEAE2",
      image:
        "https://utfs.io/f/98cd14ac-c5be-43f3-ad8f-86bf8200bd91-n6rfli.png",
      releaseDate: {
        $date: "2024-11-13T17:30:51.546Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-13T17:33:50.159Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:58:09.813Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-13T17:33:50.159Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48bf",
      },
      name: "Leehan",
      group: "Boynextdoor",
      rarity: "1",
      act: "Who!",
      code: "LNWHBO1",
      image:
        "https://utfs.io/f/69470258-e867-4168-aedf-406e23970640-f2lzh8.png",
      releaseDate: {
        $date: "2024-11-13T17:39:15.803Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-13T17:42:52.559Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:54:22.687Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-13T17:42:52.559Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48c0",
      },
      name: "Sungho",
      group: "Boynextdoor",
      rarity: "1",
      act: "Who!",
      code: "SOWHBO1",
      image:
        "https://utfs.io/f/1697d729-a225-4b67-9975-2e38879df14e-f2liji.png",
      releaseDate: {
        $date: "2024-11-13T17:39:15.803Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-13T17:42:59.648Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:54:22.687Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-13T17:42:59.648Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48c1",
      },
      name: "Hyojung",
      group: "Oh My Girl",
      rarity: "1",
      act: "Dun Dun Dance",
      code: "HGDUOH1",
      image:
        "https://utfs.io/f/cd185697-6d7a-4c56-9f7a-bbdf477b6484-og9zmw.png",
      releaseDate: {
        $date: "2024-11-14T20:53:56.744Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-14T20:57:09.361Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:56:55.652Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-14T20:57:09.361Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48c2",
      },
      name: "Mimi",
      group: "Oh My Girl",
      rarity: "1",
      act: "Dun Dun Dance",
      code: "MIDUOH1",
      image:
        "https://utfs.io/f/9e5e1102-d236-4b24-a883-03f6c1244b09-og9yx7.png",
      releaseDate: {
        $date: "2024-11-14T20:53:56.744Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-14T20:57:15.942Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:56:55.652Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-14T20:57:15.942Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48c3",
      },
      name: "YooA",
      group: "Oh My Girl",
      rarity: "1",
      act: "Dun Dun Dance",
      code: "YADUOH1",
      image:
        "https://utfs.io/f/9d43ab21-65c1-4802-b197-522f1fcca4e5-og9ezw.png",
      releaseDate: {
        $date: "2024-11-14T20:53:56.744Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-14T20:57:23.837Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:56:55.652Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-14T20:57:23.837Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48c4",
      },
      name: "Seunghee",
      group: "Oh My Girl",
      rarity: "1",
      act: "Dun Dun Dance",
      code: "SEDUOH1",
      image:
        "https://utfs.io/f/fea4932a-bf29-4546-920d-47c1d9758b06-og9y78.png",
      releaseDate: {
        $date: "2024-11-14T20:53:56.744Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-14T20:57:31.471Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:56:55.652Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-14T20:57:31.471Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48bb",
      },
      name: "Giselle",
      group: "Aespa",
      rarity: "2",
      act: "Better things",
      code: "GEBEAE2",
      image:
        "https://utfs.io/f/adceea6c-6217-4b07-b994-4a9f35721bbf-n6qx3u.png",
      releaseDate: {
        $date: "2024-11-13T17:35:38.885Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-13T17:36:19.744Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:58:09.813Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-13T17:36:19.744Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48c6",
      },
      name: "Yubin",
      group: "Oh My Girl",
      rarity: "1",
      act: "Dun Dun Dance",
      code: "YNDUOH1",
      image:
        "https://utfs.io/f/c7e7c904-4018-4afa-b1b3-a1c8b64a6642-oguzc5.png",
      releaseDate: {
        $date: "2024-11-14T20:53:56.744Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-14T20:57:49.449Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:56:55.652Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-14T20:57:49.449Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48c7",
      },
      name: "Arin",
      group: "Oh My Girl",
      rarity: "1",
      act: "Dun Dun Dance",
      code: "ANDUOH1",
      image:
        "https://utfs.io/f/6b2156db-eaea-4d09-969b-de46dce354f4-og988z.png",
      releaseDate: {
        $date: "2024-11-14T20:53:56.744Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-14T20:57:57.134Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:56:55.652Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-14T20:57:57.134Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48c8",
      },
      name: "Lee Minhyuk (Huta)",
      group: "Soloist",
      rarity: "1",
      act: "HUTAZONE",
      code: "LMSOHU1",
      image:
        "https://utfs.io/f/45defd0d-f2d1-49a0-ac6a-8ef44feac67a-cmsel3.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T05:59:47.848Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:09:33.001Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T05:59:47.848Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48be",
      },
      name: "Woonhak",
      group: "Boynextdoor",
      rarity: "1",
      act: "Who!",
      code: "WKWHBO1",
      image:
        "https://utfs.io/f/8a00f7d0-a0c8-4fab-8497-1a997f1d6bb6-f2m08s.png",
      releaseDate: {
        $date: "2024-11-13T17:39:15.803Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-13T17:42:34.677Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:53:25.571Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-13T17:42:34.677Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48ca",
      },
      name: "Chaeryeong",
      group: "ITZY",
      rarity: "1",
      act: "Wannabe",
      code: "CGWAIT1",
      image:
        "https://utfs.io/f/7e45bee6-c82e-4ac5-b9b6-629b9ea1ba28-wrd3tm.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T06:01:40.720Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:11:17.286Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T06:01:40.720Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48cb",
      },
      name: "Lia",
      group: "ITZY",
      rarity: "1",
      act: "Wannabe",
      code: "LAWAIT1",
      image:
        "https://utfs.io/f/aea15497-470c-4923-8bb0-98ffad00f22b-1wov11.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T06:01:47.983Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:11:17.286Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T06:01:47.983Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48cc",
      },
      name: "Ryujin",
      group: "ITZY",
      rarity: "1",
      act: "Wannabe",
      code: "RNWAIT1",
      image:
        "https://utfs.io/f/debe1b81-e3c0-4992-846b-aca9f09e5fc3-gfhiy0.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T06:01:58.012Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:11:17.286Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T06:01:58.012Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48cd",
      },
      name: "Yeji",
      group: "ITZY",
      rarity: "1",
      act: "Wannabe",
      code: "YIWAIT1",
      image:
        "https://utfs.io/f/f5125a7e-a086-4bd1-96bb-2f260b9ac1dc-8n3d5a.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T06:02:05.366Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:11:17.286Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T06:02:05.366Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48ce",
      },
      name: "Yuna",
      group: "ITZY",
      rarity: "1",
      act: "Wannabe",
      code: "YAWAIT1",
      image:
        "https://utfs.io/f/8ffe4682-1ba7-4a1b-9d39-efe2479274cb-pu043u.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T06:02:13.450Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:11:17.286Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T06:02:13.450Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48cf",
      },
      name: "Gaon",
      group: "Xdinary Heroes",
      rarity: "1",
      act: "Happy Death Day!",
      code: "GNHAXD1",
      image:
        "https://utfs.io/f/cbd418bd-f615-4bd4-982b-ffcdeedceede-eftz7v.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T06:05:55.016Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:12:12.561Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T06:05:55.016Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48d0",
      },
      name: "Gunil",
      group: "Xdinary Heroes",
      rarity: "1",
      act: "Happy Death Day!",
      code: "GLHAXD1",
      image:
        "https://utfs.io/f/ba868a53-4b99-4b9a-ab6f-c5c8d703a9cf-awu3c1.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T06:06:05.179Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:12:12.561Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T06:06:05.179Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48d1",
      },
      name: "Jooyeon",
      group: "Xdinary Heroes",
      rarity: "1",
      act: "Happy Death Day!",
      code: "JNHAXD1",
      image:
        "https://utfs.io/f/52167da0-1ddb-47f3-85d8-701dfb13dcd4-616f5d.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T06:06:12.801Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:12:12.561Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T06:06:12.801Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48d2",
      },
      name: "Jungsu",
      group: "Xdinary Heroes",
      rarity: "1",
      act: "Happy Death Day!",
      code: "JUHAXD1",
      image:
        "https://utfs.io/f/610e75ff-bad5-4a0e-8819-0c3d5b2b25d2-u6k2ki.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T06:06:25.604Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:12:12.561Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T06:06:25.604Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48d3",
      },
      name: "O.de",
      group: "Xdinary Heroes",
      rarity: "1",
      act: "Happy Death Day!",
      code: "OEHAXD1",
      image:
        "https://utfs.io/f/49cd3986-a147-40c0-bd10-0e116d69cea0-yatg1g.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T06:06:33.984Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:12:12.561Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T06:06:33.984Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48d4",
      },
      name: "Jun Han",
      group: "Xdinary Heroes",
      rarity: "1",
      act: "Happy Death Day!",
      code: "JHHAXD1",
      image:
        "https://utfs.io/f/762bb557-40b7-483c-9289-06d53f9d2a7f-ltdkr0.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T06:07:02.606Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:12:12.561Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T06:07:02.606Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48c5",
      },
      name: "Jiho",
      group: "Oh My Girl",
      rarity: "1",
      act: "Dun Dun Dance",
      code: "JODUOH1",
      image:
        "https://utfs.io/f/4d11152e-4090-42cf-b14b-d8ac6dbc544d-og9deb.png",
      releaseDate: {
        $date: "2024-11-14T20:53:56.744Z",
      },
      createdBy: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-14T20:57:40.826Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T08:56:55.652Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-14T20:57:40.826Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48d6",
      },
      name: "Yedam",
      group: "TREASURE",
      rarity: "1",
      act: "TFS: Treasure Effect",
      code: "YMTFTR1",
      image:
        "https://utfs.io/f/1aace867-825b-4fbb-9906-86548f201516-gbgkas.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T15:57:10.174Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:13:18.121Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T15:57:10.174Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48d7",
      },
      name: "Doyoung",
      group: "TREASURE",
      rarity: "1",
      act: "TFS: Treasure Effect",
      code: "DGTFTR1",
      image:
        "https://utfs.io/f/02c58be8-5f3a-46f3-900d-31b6849e25f2-9v0ai5.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T15:57:20.266Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:13:18.121Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T15:57:20.266Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48d8",
      },
      name: "Haruto",
      group: "TREASURE",
      rarity: "1",
      act: "TFS: Treasure Effect",
      code: "HOTFTR1",
      image:
        "https://utfs.io/f/0559a3ce-dc1a-4da8-b537-2d759ab09366-ovjppz.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T15:57:30.742Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:13:18.121Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T15:57:30.742Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48d9",
      },
      name: "Hyunsuk",
      group: "TREASURE",
      rarity: "1",
      act: "TFS: Treasure Effect",
      code: "HKTFTR1",
      image:
        "https://utfs.io/f/1a6eb543-e846-4a06-9dbc-8f73a2c7cf34-x61btt.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T15:57:43.523Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:13:18.121Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T15:57:43.523Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48c9",
      },
      name: "J-Hope",
      group: "Soloist",
      rarity: "1",
      act: "MORE",
      code: "JEMOSO1",
      image:
        "https://utfs.io/f/07b9568d-72dc-4fd3-ab7d-34ecbbb65db8-fwxm7r.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T05:59:57.506Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:12:39.334Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T05:59:57.506Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48db",
      },
      name: "Jihoon",
      group: "TREASURE",
      rarity: "1",
      act: "TFS: Treasure Effect",
      code: "JNTFTR1",
      image:
        "https://utfs.io/f/99df5383-aadb-402a-8624-1f8c62da6735-709gd7.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T15:58:16.146Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:13:18.121Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T15:58:16.146Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48dc",
      },
      name: "Junkyu",
      group: "TREASURE",
      rarity: "1",
      act: "TFS: Treasure Effect",
      code: "JUTFTR1",
      image:
        "https://utfs.io/f/0cab0f3c-f319-4001-bc1a-1d42ed32a608-fr7lpg.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T15:58:33.098Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:13:18.121Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T15:58:33.098Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48dd",
      },
      name: "Mashiho",
      group: "TREASURE",
      rarity: "1",
      act: "TFS: Treasure Effect",
      code: "MOTFTR1",
      image:
        "https://utfs.io/f/d610b204-ef3b-4cc2-aad2-ebebe606cde4-yfxlnr.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T15:58:40.963Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:13:18.121Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T15:58:40.963Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48de",
      },
      name: "Yoshi",
      group: "TREASURE",
      rarity: "1",
      act: "TFS: Treasure Effect",
      code: "YITFTR1",
      image:
        "https://utfs.io/f/f191e86f-8032-4d76-ad4e-0b886790fde9-x4w4o2.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T15:58:48.986Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:13:18.121Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T15:58:48.986Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48df",
      },
      name: "Jeongwoo",
      group: "TREASURE",
      rarity: "1",
      act: "TFS: Treasure Effect",
      code: "JOTFTR1",
      image:
        "https://utfs.io/f/69dc0ae8-10b4-4c81-880d-debbfacd2181-fyx90q.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T16:02:11.231Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:13:18.121Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T16:02:11.231Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48e0",
      },
      name: "Junghwan",
      group: "TREASURE",
      rarity: "1",
      act: "TFS: Treasure Effect",
      code: "JHTFTR1",
      image:
        "https://utfs.io/f/032f2b8b-2e57-4269-aeda-6c881c67b76c-56pczk.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T16:02:19.846Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:13:18.121Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T16:02:19.846Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48e1",
      },
      name: "Tzuyu",
      group: "Soloist",
      rarity: "1",
      act: "aboutTZU",
      code: "TUABSO1",
      image:
        "https://utfs.io/f/f59c83e0-e166-44e9-8f6c-13a80ca1e403-smbpkh.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-16T08:12:13.794Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:11:49.228Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-16T08:12:13.794Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48e2",
      },
      name: "Beomgyu",
      group: "TXT",
      rarity: "2",
      act: "The Dream Chapter: Magic",
      code: "BUTHTX2",
      image:
        "https://utfs.io/f/9bc5ae14-c66e-442e-84e6-5140fb472857-knaefx.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-16T08:32:43.001Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:14:17.299Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-16T08:32:43.001Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48e3",
      },
      name: "Huening Kai",
      group: "TXT",
      rarity: "2",
      act: "The Dream Chapter: Magic",
      code: "HITHTX2",
      image:
        "https://utfs.io/f/361c5244-8762-48a3-a12d-3891500eb85c-fzc13c.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-16T08:32:50.080Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:14:17.299Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-16T08:32:50.080Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48e4",
      },
      name: "Soobin",
      group: "TXT",
      rarity: "2",
      act: "The Dream Chapter: Magic",
      code: "SNTHTX2",
      image:
        "https://utfs.io/f/29df4ab1-b01e-4ff0-a0e7-1cb71faa729c-ife4y3.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-16T08:32:57.468Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:14:17.299Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-16T08:32:57.468Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48e5",
      },
      name: "Taehyun",
      group: "TXT",
      rarity: "2",
      act: "The Dream Chapter: Magic",
      code: "TNTHTX2",
      image:
        "https://utfs.io/f/da43c398-9586-4530-8178-68a1b9f02663-cogpct.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-16T08:33:04.756Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:14:17.299Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-16T08:33:04.756Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48e6",
      },
      name: "Yeonjun",
      group: "TXT",
      rarity: "2",
      act: "The Dream Chapter: Magic",
      code: "YNTHTX2",
      image:
        "https://utfs.io/f/3e38ee2d-ff5a-455d-af00-2addecc024e9-wymqcn.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-16T08:33:14.407Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:14:17.299Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-16T08:33:14.407Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48e7",
      },
      name: "Taesan",
      group: "Boynextdoor",
      rarity: "1",
      act: "Who!",
      code: "TNWHBO1",
      image:
        "https://utfs.io/f/f6f5d2ac-89ce-4021-aace-68b2eeae60f0-tq4ty0.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-16T08:55:18.139Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:11:17.286Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-16T08:55:18.139Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48e8",
      },
      name: "Jennie",
      group: "Soloist",
      rarity: "1",
      act: "Solo",
      code: "JESOSO1",
      image:
        "https://utfs.io/f/aa7929bd-af8d-46fa-be46-8128f08a2a2c-hliabq.png",
      releaseDate: {
        $date: "2024-11-16T10:32:20.096Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-11-16T10:35:08.662Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T10:37:24.802Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-16T10:35:08.662Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48e9",
      },
      name: "Iroha",
      group: "Illit",
      rarity: "1",
      act: "I'll like you",
      code: "IAI'IL1",
      image:
        "https://utfs.io/f/d5728c52-44d0-4600-8f66-ee40cb4f1cba-57u7ts.png",
      releaseDate: {
        $date: "2024-11-16T10:32:20.096Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-11-16T10:35:14.609Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T10:38:24.555Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-16T10:35:14.609Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48d5",
      },
      name: "Asahi",
      group: "TREASURE",
      rarity: "1",
      act: "TFS: Treasure Effect",
      code: "AITFTR1",
      image:
        "https://utfs.io/f/1754e3cb-904c-4e16-aa98-19786885ec97-w9sok0.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T15:57:02.712Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:13:18.121Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T15:57:02.712Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48eb",
      },
      name: "Moka",
      group: "Illit",
      rarity: "1",
      act: "I'll like you",
      code: "MAI'IL1",
      image:
        "https://utfs.io/f/080d0414-701a-474f-8d80-9cafeaed231c-ke8ecn.png",
      releaseDate: {
        $date: "2024-11-16T10:32:20.096Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-11-16T10:35:28.119Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T10:38:24.555Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-16T10:35:28.119Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48ec",
      },
      name: "Wonhee",
      group: "Illit",
      rarity: "1",
      act: "I'll like you",
      code: "WEI'IL1",
      image:
        "https://utfs.io/f/f66e213a-a2bc-4cbd-9a42-e4cb4d35936a-t0ndwt.png",
      releaseDate: {
        $date: "2024-11-16T10:32:20.096Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-11-16T10:35:34.603Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T10:38:24.555Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-16T10:35:34.603Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48ed",
      },
      name: "Yunah",
      group: "Illit",
      rarity: "1",
      act: "I'll like you",
      code: "YHI'IL1",
      image:
        "https://utfs.io/f/118af2fb-4701-490c-a1a2-03a025b0ab26-26s4cm.png",
      releaseDate: {
        $date: "2024-11-16T10:32:20.096Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-11-16T10:35:43.447Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T10:38:24.555Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-16T10:35:43.447Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48da",
      },
      name: "Jaehyuk",
      group: "TREASURE",
      rarity: "1",
      act: "TFS: Treasure Effect",
      code: "JKTFTR1",
      image:
        "https://utfs.io/f/9cc54410-0963-40d5-aabe-bbc131563de1-3aksol.png",
      releaseDate: {
        $date: "2024-11-16T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-15T15:57:51.634Z",
      },
      approvedBy: {
        $oid: "66d2c6637fe6ba07d388cef9",
      },
      approvedAt: {
        $date: "2024-11-16T09:13:18.121Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-15T15:57:51.634Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "673889fe1ce20aac414e48ea",
      },
      name: "Minju",
      group: "Illit",
      rarity: "1",
      act: "I'll like you",
      code: "MUI'IL1",
      image:
        "https://utfs.io/f/93a1efea-8ea0-413e-bdb0-0a7222bfcb89-hjrn4o.png",
      releaseDate: {
        $date: "2024-11-16T10:32:20.096Z",
      },
      createdBy: {
        $oid: "66d303a4f194a44e51d4f907",
      },
      createdAt: {
        $date: "2024-11-16T10:35:20.615Z",
      },
      approvedBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-16T10:38:24.555Z",
      },
      event: false,
      dropAble: true,
      updatedAt: {
        $date: "2024-11-16T10:35:20.615Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "671cfd685887f794f9418512",
      },
      name: "Eunwoo",
      group: "ASTRO",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "EOHAAS5",
      image:
        "https://utfs.io/f/7adea0f3-e3a6-49cf-bff5-97f481611c31-9zn78v.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:52:41.183Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.489Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd685887f794f9418513",
      },
      name: "Chuu",
      group: "Soloist",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "CUHASO5",
      image:
        "https://utfs.io/f/ab3af4bc-fc63-4dba-adcb-e2c07543dfad-cyj0j5.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:52:28.882Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.630Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd685887f794f9418514",
      },
      name: "IU",
      group: "Soloist",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "IUHASO5",
      image:
        "https://utfs.io/f/53c7eb68-566c-42b5-acec-d452caf0fe23-ndrlo8.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:53:13.706Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.698Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd695887f794f9418515",
      },
      name: "Jaehee",
      group: "Weeekly",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "JEHAWE5",
      image:
        "https://utfs.io/f/12e557d1-8168-4b31-a497-2f1ebec877f3-30ec6x.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:53:22.298Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.699Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd695887f794f9418516",
      },
      name: "Jin",
      group: "BTS",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "JNHABT5",
      image:
        "https://utfs.io/f/b938f3e5-1347-4cc3-a1f0-c75f775a729d-jwpmzd.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:57:27.188Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.776Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd695887f794f9418517",
      },
      name: "Haechan",
      group: "NCT",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "HNHANC5",
      image:
        "https://utfs.io/f/f86f8305-d8f4-4c36-a1eb-fff0a6c6ce8e-tta9yi.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:52:50.342Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.559Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd695887f794f9418518",
      },
      name: "Hwi",
      group: "Ciipher",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "HIHACI5",
      image:
        "https://utfs.io/f/2ad979a8-d2d1-44d9-9bdf-952f52cb05ac-9b3s4j.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:52:58.452Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.628Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd695887f794f9418519",
      },
      name: "Keeho",
      group: "P1Harmony",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "KOHAP15",
      image:
        "https://utfs.io/f/3142647a-7f70-4284-9db2-7feb814d105a-h9h4c8.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:57:37.104Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.843Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd695887f794f941851a",
      },
      name: "Key",
      group: "Soloist",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "KYHASO5",
      image: "https://utfs.io/f/6035273d-8d28-4340-b38b-78ad7f18185d-z9tbz.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:57:45.461Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.853Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd695887f794f941851b",
      },
      name: "Lily",
      group: "NMIXX",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "LYHANM5",
      image:
        "https://utfs.io/f/9d9242a5-5748-49d9-ba76-f507e7f2deaf-65c6uh.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:57:53.777Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.903Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd695887f794f941851c",
      },
      name: "Mijoo",
      group: "LOVELYZ",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "MOHALO5",
      image:
        "https://utfs.io/f/d0ec77a1-c76c-44ac-abde-d469ca451563-o7tk1u.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:58:03.366Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.911Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd695887f794f941851d",
      },
      name: "Mina",
      group: "TWICE",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "MAHATW5",
      image: "https://utfs.io/f/696a6c67-d157-4c26-aaf1-51630aeb2f01-f683m.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:58:12.299Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.922Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd695887f794f941851e",
      },
      name: "JiU",
      group: "Dreamcatcher",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "JUHADR5",
      image:
        "https://utfs.io/f/dec8a366-5c36-4a6b-bbf6-d663a14f97ac-5ap22c.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:53:43.481Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.937Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd695887f794f941851f",
      },
      name: "Soobin",
      group: "TXT",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "SNHATX5",
      image:
        "https://utfs.io/f/21047fcd-67ad-4dad-a6f4-572b25fb939b-55khad.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:58:53.171Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.979Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd695887f794f9418520",
      },
      name: "Swan",
      group: "Purple Kiss",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "SNHAPU5",
      image:
        "https://utfs.io/f/dc65f047-64c2-45ee-95fd-52eb5886c2bc-rwhtpi.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:59:04.263Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.991Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd695887f794f9418521",
      },
      name: "Wonho",
      group: "Soloist",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "WOHASO5",
      image:
        "https://utfs.io/f/3f14bf91-fd9a-4f4c-9307-846bb964f765-t9loxv.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T06:01:59.552Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:09.006Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd6a5887f794f9418522",
      },
      name: "Q",
      group: "THE BOYZ",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "QQHATH5",
      image:
        "https://utfs.io/f/379306cd-579f-477e-9e4d-bf201226c147-ee4krd.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:58:32.425Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:09.019Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd6a5887f794f9418523",
      },
      name: "Hyunjin",
      group: "Stray Kids",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "HNHAST5",
      image:
        "https://utfs.io/f/72575834-e3cd-4c0c-a9ee-cb9a04f8ebe4-jp6uym.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:53:05.762Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:09.024Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd6a5887f794f9418524",
      },
      name: "Wonyoung",
      group: "IZ*ONE",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "WGHAIZ5",
      image:
        "https://utfs.io/f/a4d88ea7-c234-4520-8860-f74cffca3a7e-y6bjh8.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T06:02:10.868Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:09.047Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd6a5887f794f9418525",
      },
      name: "Karina",
      group: "Aespa",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "KAHAAE5",
      image:
        "https://utfs.io/f/e483b5ed-dcc5-4719-9415-43cd7c80f113-umzntj.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:53:52.119Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:08.784Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd6a5887f794f9418526",
      },
      name: "Xion",
      group: "ONEUS",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "XNHAON5",
      image:
        "https://utfs.io/f/dabeb0a0-75e2-45d6-9eac-bde4f76d6c3b-g4x1ct.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T06:02:30.249Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:09.075Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd6a5887f794f9418527",
      },
      name: "Yoon",
      group: "STAYC",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "YNHAST5",
      image:
        "https://utfs.io/f/2abb8e8f-c846-4f7c-8792-96724a37ecc9-mrj5ya.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T06:02:41.469Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:09.136Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd6a5887f794f9418528",
      },
      name: "Miyeon",
      group: "(G)I-DLE",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "MNHA(G5",
      image:
        "https://utfs.io/f/c51c730a-be6e-4849-a024-6fca21ad1174-434f7n.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:58:23.249Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:09.333Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd6a5887f794f9418529",
      },
      name: "Seonghwa",
      group: "ATEEZ",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "SAHAAT5",
      image:
        "https://utfs.io/f/5832f1c4-34b6-4e2d-9330-4a4ca531f507-qn77yk.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T05:58:43.857Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:09.506Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "671cfd6a5887f794f941852a",
      },
      name: "Woozi",
      group: "Seventeen",
      rarity: "5",
      act: "HALLOWEEN2024",
      code: "WIHASE5",
      image:
        "https://utfs.io/f/4d5fc89e-8b48-4c51-91f7-a330323b5b4e-uwf1x2.png",
      releaseDate: {
        $date: "2024-10-26T12:00:00.000Z",
      },
      createdBy: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-10-26T06:02:21.465Z",
      },
      updatedAt: {
        $date: "2024-10-26T14:32:09.060Z",
      },
      approvedBy: {
        $oid: "671a9c54820908234d3e19a0",
      },
      approvedAt: {
        $date: "2024-10-26T14:32:06.625Z",
      },
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887ec",
      },
      name: "Haerin",
      group: "NewJeans",
      rarity: "2",
      act: "How Sweet",
      code: "HRHONE2",
      image:
        "https://utfs.io/f/ed654b7e-419d-41d2-817c-cec0838102a4-aqd5jg.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-17T16:04:06.987Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:27:23.823Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:27:23.821Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887ed",
      },
      name: "Hanni",
      group: "NewJeans",
      rarity: "2",
      act: "How Sweet",
      code: "HIHONE2",
      image:
        "https://utfs.io/f/be8dc450-4a46-4e39-8d21-3f0a02dfe8d2-aqwadw.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-17T16:04:18.642Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:27:51.764Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:27:51.763Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887ee",
      },
      name: "Danielle",
      group: "NewJeans",
      rarity: "2",
      act: "How Sweet",
      code: "DEHONE2",
      image:
        "https://utfs.io/f/b1112424-fff4-4fc4-a5ad-e7b011ba311d-aqd7qn.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-17T16:04:26.599Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:27:54.479Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:27:54.478Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887ef",
      },
      name: "Minji",
      group: "NewJeans",
      rarity: "2",
      act: "How Sweet",
      code: "MIHONE2",
      image:
        "https://utfs.io/f/4025e5ac-d9cc-4e53-8ed1-b1b03ccf3702-aqdqb2.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-17T16:04:34.556Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:27:56.445Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:27:56.444Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887f0",
      },
      name: "Mark",
      group: "Nct Dream",
      rarity: "1",
      act: "Hot Sauce",
      code: "MKHONC1",
      image:
        "https://utfs.io/f/a1b81641-a801-49be-ab1c-932531647417-g9dsrb.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-17T16:04:43.621Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:27:58.200Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:27:58.199Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887f1",
      },
      name: "Jeno",
      group: "Nct Dream",
      rarity: "1",
      act: "Hot Sauce",
      code: "JOHONC1",
      image:
        "https://utfs.io/f/df01f6ef-42f2-44c1-96c3-983430f32b5e-g9ds0h.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-17T16:04:50.810Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:27:59.147Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:27:59.146Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887f2",
      },
      name: "Jaemin",
      group: "Nct Dream",
      rarity: "1",
      act: "Hot Sauce",
      code: "JNHONC1",
      image:
        "https://utfs.io/f/e7d07699-429f-45cd-a00e-b2322ffae2d0-g9dr9t.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-17T16:04:58.229Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:28:00.540Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:28:00.539Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887f3",
      },
      name: "Chenle",
      group: "Nct Dream",
      rarity: "1",
      act: "Hot Sauce",
      code: "CEHONC1",
      image:
        "https://utfs.io/f/c102c363-2567-4f73-9a80-8a5c64ab64e7-g9daza.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-17T16:05:08.209Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:28:02.534Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:28:02.533Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887f4",
      },
      name: "Jisung",
      group: "Nct Dream",
      rarity: "1",
      act: "Hot Sauce",
      code: "JGHONC1",
      image:
        "https://utfs.io/f/8a757d61-4fc4-41f6-b460-cb219b7fd873-g9da62.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-17T16:05:15.281Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:28:04.334Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:28:04.333Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887f5",
      },
      name: "Renjun",
      group: "Nct Dream",
      rarity: "1",
      act: "Hot Sauce",
      code: "RNHONC1",
      image:
        "https://utfs.io/f/4f0e7109-82f2-4ee2-8d61-c1bcb86eae58-g9d9h4.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-17T16:05:22.451Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:28:06.062Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:28:06.061Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887f6",
      },
      name: "Haechan",
      group: "Nct Dream",
      rarity: "1",
      act: "Hot Sauce",
      code: "HNHONC1",
      image:
        "https://utfs.io/f/323e0182-ba05-403e-a6da-c496462aec05-1yqevk.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-17T16:09:26.980Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:27:39.040Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:27:39.024Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887f7",
      },
      name: "J-Hope",
      group: "BTS",
      rarity: "2",
      act: "Map of The Soul: 7",
      code: "JEMABT2",
      image:
        "https://utfs.io/f/12ec1029-c77d-4ba6-8bdb-016b6b339025-uox9qh.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-24T21:58:08.105Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:05:24.183Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:05:24.181Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887f8",
      },
      name: "Jimin",
      group: "BTS",
      rarity: "2",
      act: "Map of The Soul: 7",
      code: "JNMABT2",
      image:
        "https://utfs.io/f/fead2b85-f015-426a-8e6b-a41e5610c56b-qhkp5v.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-24T21:58:13.296Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887f9",
      },
      name: "Jungkook",
      group: "BTS",
      rarity: "2",
      act: "Map of The Soul: 7",
      code: "JKMABT2",
      image:
        "https://utfs.io/f/4c660892-f13a-4459-a986-a4ef4ee8c64a-c6io7i.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-24T21:58:18.170Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887fa",
      },
      name: "RM",
      group: "BTS",
      rarity: "2",
      act: "Map of The Soul: 7",
      code: "RMMABT2",
      image:
        "https://utfs.io/f/a963b5c4-bc66-4bde-a05f-bc69a49c3f3b-9qf8vv.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-24T21:58:23.901Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887fb",
      },
      name: "Suga",
      group: "BTS",
      rarity: "2",
      act: "Map of The Soul: 7",
      code: "SAMABT2",
      image:
        "https://utfs.io/f/f881140a-01d5-45a0-8364-6d518b792bde-3p7l8m.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-24T21:58:29.382Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887fc",
      },
      name: "V",
      group: "BTS",
      rarity: "2",
      act: "Map of The Soul: 7",
      code: "VVMABT2",
      image:
        "https://utfs.io/f/7379fac9-78e2-427a-9642-06088b3451c9-wwjzwg.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-24T21:58:34.976Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887fd",
      },
      name: "Jin",
      group: "BTS",
      rarity: "2",
      act: "Map of The Soul: 7",
      code: "JIMABT2",
      image:
        "https://utfs.io/f/06af3412-5b55-48c0-b621-55a08fa84e98-xcnonb.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-24T21:59:06.695Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887fe",
      },
      name: "Wonho",
      group: "Soloist",
      rarity: "2",
      act: "Bittersweet",
      code: "WOBISO2",
      image:
        "https://utfs.io/f/2c335c82-4706-4322-b2b2-c07d3c0cd145-x1qoxn.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-24T22:00:54.124Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b887ff",
      },
      name: "Younha",
      group: "Soloist",
      rarity: "1",
      act: "End Theory",
      code: "YAENSO1",
      image:
        "https://utfs.io/f/d882c80c-3e42-49e3-bc6f-be9d0fec379f-yi1rf9.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-24T22:00:59.549Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b88800",
      },
      name: "BAE",
      group: "NMIXX",
      rarity: "1",
      act: "Expérgo",
      code: "BEEXNM1",
      image:
        "https://utfs.io/f/90256cfc-d768-4696-8c02-2f0e209b3f6c-bzu8qt.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-24T22:04:20.924Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b88801",
      },
      name: "Haewon",
      group: "NMIXX",
      rarity: "1",
      act: "Expérgo",
      code: "HNEXNM1",
      image:
        "https://utfs.io/f/34b42e99-a1cc-42b6-9aec-b852aaded9e3-tsm6ix.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-24T22:04:26.687Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b88802",
      },
      name: "Jiwoo",
      group: "NMIXX",
      rarity: "1",
      act: "Expérgo",
      code: "JOEXNM1",
      image:
        "https://utfs.io/f/1fbc0427-b98c-4034-af5d-cb2cb3cef51b-fgbho7.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-24T22:04:31.796Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b88803",
      },
      name: "Kyujin",
      group: "NMIXX",
      rarity: "1",
      act: "Expérgo",
      code: "KNEXNM1",
      image:
        "https://utfs.io/f/0b45a113-266a-4870-9560-ef511a1de4b8-mkc50n.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-24T22:04:37.797Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b88804",
      },
      name: "Lily",
      group: "NMIXX",
      rarity: "1",
      act: "Expérgo",
      code: "LYEXNM1",
      image:
        "https://utfs.io/f/0320cea7-7785-4812-85cf-8b5cffbca5e8-36yzw7.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-24T22:04:43.205Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b88805",
      },
      name: "Sullyoon",
      group: "NMIXX",
      rarity: "1",
      act: "Expérgo",
      code: "SNEXNM1",
      image:
        "https://utfs.io/f/956d3161-79de-4401-9a08-151c9fb70929-2q1l3q.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-24T22:04:48.498Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b88806",
      },
      name: "Hyein",
      group: "NewJeans",
      rarity: "2",
      act: "How Sweet",
      code: "HNHONE2",
      image:
        "https://utfs.io/f/f9591a50-96c4-43ea-af3e-205fdc787b55-nst9rm.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-28T09:24:49.101Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b88807",
      },
      name: "Kim Wooseok",
      group: "Soloist",
      rarity: "1",
      act: "Sugar",
      code: "KKSUSO1",
      image:
        "https://utfs.io/f/1fb6af6e-f128-4559-82a8-4784326af8b6-uv2jft.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-28T09:36:25.328Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:04:09.998Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:04:09.997Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b88808",
      },
      name: "Keeho",
      group: "P1Harmony",
      rarity: "1",
      act: "Scared",
      code: "KOSCP11",
      image:
        "https://utfs.io/f/64121c88-1ace-49ae-9434-b82544adcab2-uvjpwr.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-28T09:36:30.898Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:28:15.972Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:28:15.971Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b88809",
      },
      name: "Theo",
      group: "P1Harmony",
      rarity: "1",
      act: "Scared",
      code: "TOSCP11",
      image:
        "https://utfs.io/f/e1a4206f-0f8c-4ac2-8970-5b9e0efffee7-uvj3m9.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-28T09:36:35.490Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:28:17.766Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:28:17.765Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b8880a",
      },
      name: "Jiung",
      group: "P1Harmony",
      rarity: "1",
      act: "Scared",
      code: "JGSCP11",
      image:
        "https://utfs.io/f/6e8420ba-02ff-482c-bf30-1e06ef336e82-ist7ga.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-28T09:36:39.909Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:28:19.419Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:28:19.416Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b8880b",
      },
      name: "Intak",
      group: "P1Harmony",
      rarity: "1",
      act: "Scared",
      code: "IKSCP11",
      image:
        "https://utfs.io/f/27a3422d-1fab-4a32-9cc5-148c0b3348ba-itwuv3.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-28T09:36:44.063Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:28:21.238Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:28:21.237Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b8880c",
      },
      name: "Soul",
      group: "P1Harmony",
      rarity: "1",
      act: "Scared",
      code: "SLSCP11",
      image:
        "https://utfs.io/f/940c9be2-ecc4-42a7-93d9-e041607dc581-uvj6j5.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-28T09:36:48.156Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:28:22.961Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:28:22.960Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b8880d",
      },
      name: "Jongseob",
      group: "P1Harmony",
      rarity: "1",
      act: "Scared",
      code: "JBSCP11",
      image:
        "https://utfs.io/f/d51972e3-9c3e-41c8-95e5-0061d8cdc02d-uvj23y.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-28T09:36:53.126Z",
      },
      updatedAt: {
        $date: "2024-11-30T05:28:56.199Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T05:28:56.198Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6d29a477eb57b8880e",
      },
      name: "Dami",
      group: "DREAMCATCHER",
      rarity: "1",
      act: "PIRI",
      code: "DIPIDR1",
      image:
        "https://utfs.io/f/96ee3cbc-7943-4b77-b845-20f56b7dd849-p9f6lm.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-29T16:32:53.589Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b8880f",
      },
      name: "Gahyun",
      group: "DREAMCATCHER",
      rarity: "1",
      act: "PIRI",
      code: "GNPIDR1",
      image:
        "https://utfs.io/f/3c60c120-7c52-48e3-8bfe-600a085f85f3-rkhvdt.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-29T16:32:58.554Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b88810",
      },
      name: "Handong",
      group: "DREAMCATCHER",
      rarity: "1",
      act: "PIRI",
      code: "HGPIDR1",
      image:
        "https://utfs.io/f/0e0e3c5e-4d6b-43a8-a487-5625409dce23-tgulhy.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-29T16:33:04.117Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b88811",
      },
      name: "JiU",
      group: "DREAMCATCHER",
      rarity: "1",
      act: "PIRI",
      code: "JUPIDR1",
      image:
        "https://utfs.io/f/7c4debf0-b178-4094-aea4-58394111724b-9gibpv.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-29T16:33:09.554Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b88812",
      },
      name: "Siyeon",
      group: "DREAMCATCHER",
      rarity: "1",
      act: "PIRI",
      code: "SNPIDR1",
      image:
        "https://utfs.io/f/af12c556-8cee-4470-888d-46f81ff80673-catdqa.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-29T16:33:14.421Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b88813",
      },
      name: "SuA",
      group: "DREAMCATCHER",
      rarity: "1",
      act: "PIRI",
      code: "SAPIDR1",
      image:
        "https://utfs.io/f/9b4b887b-864b-4fff-ac9e-2baac9f76880-rglen8.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-29T16:33:19.516Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b88814",
      },
      name: "Yoohyeon",
      group: "DREAMCATCHER",
      rarity: "1",
      act: "PIRI",
      code: "YNPIDR1",
      image:
        "https://utfs.io/f/04600e05-ddf1-49a7-9cfb-5feec1ec12a7-av9htj.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-29T16:33:24.667Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b88815",
      },
      name: "IU",
      group: "Soloist",
      rarity: "2",
      act: "Good Day",
      code: "IUGOSO2",
      image:
        "https://utfs.io/f/65586b56-17f1-4c51-b370-ddbb834e3b2b-1nv4z7.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-29T16:37:50.771Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:06:39.288Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:06:39.287Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b88816",
      },
      name: "Shinyu",
      group: "TWS",
      rarity: "1",
      act: "Plot Twist",
      code: "SUPLTW1",
      image:
        "https://utfs.io/f/61a19f1a-6a67-4d3f-b3b5-9cc4ff6908f6-vafwdr.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-30T06:14:19.597Z",
      },
      updatedAt: {
        $date: "2024-11-30T07:17:08.780Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T07:17:08.779Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b88817",
      },
      name: "Dohoon",
      group: "TWS",
      rarity: "1",
      act: "Plot Twist",
      code: "DNPLTW1",
      image:
        "https://utfs.io/f/95770055-4a25-4c47-9c0e-a9cb9cf00034-vafvny.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-30T06:14:23.597Z",
      },
      updatedAt: {
        $date: "2024-11-30T07:17:13.269Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T07:17:13.268Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b88818",
      },
      name: "Hanjin",
      group: "TWS",
      rarity: "1",
      act: "Plot Twist",
      code: "HNPLTW1",
      image:
        "https://utfs.io/f/74a26c8f-7991-44ed-931c-4211d8594596-vafx3i.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-30T06:14:28.116Z",
      },
      updatedAt: {
        $date: "2024-11-30T07:17:14.734Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T07:17:14.732Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b88819",
      },
      name: "Jihoon",
      group: "TWS",
      rarity: "1",
      act: "Plot Twist",
      code: "JNPLTW1",
      image:
        "https://utfs.io/f/78a35a35-c5de-4f93-bd92-6868709e45de-vaffea.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-30T06:14:32.229Z",
      },
      updatedAt: {
        $date: "2024-11-30T07:17:17.419Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T07:17:17.418Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b8881a",
      },
      name: "Youngjae",
      group: "TWS",
      rarity: "1",
      act: "Plot Twist",
      code: "YEPLTW1",
      image:
        "https://utfs.io/f/3bb35484-823a-48d9-9872-88c45220be5b-vaffbv.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-30T06:14:36.420Z",
      },
      updatedAt: {
        $date: "2024-11-30T07:17:21.543Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T07:17:21.542Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b8881b",
      },
      name: "Kyungmin",
      group: "TWS",
      rarity: "1",
      act: "Plot Twist",
      code: "KNPLTW1",
      image:
        "https://utfs.io/f/cde4331a-a2f6-4e7e-8311-9a82ac27de61-vafdx2.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      createdAt: {
        $date: "2024-11-30T06:14:40.951Z",
      },
      updatedAt: {
        $date: "2024-11-30T07:17:22.855Z",
      },
      approvedById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      approvedAt: {
        $date: "2024-11-30T07:17:22.854Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b8881c",
      },
      name: "Isa",
      group: "StayC",
      rarity: "1",
      act: "ASAP",
      code: "IAASST1",
      image: "https://utfs.io/f/ce4e0ae6-f0e6-4061-9fe3-79d42b7a0f72-1kyf.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-30T11:11:29.033Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:13:58.915Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:13:58.913Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b8881d",
      },
      name: "J",
      group: "StayC",
      rarity: "1",
      act: "ASAP",
      code: "JJASST1",
      image: "https://utfs.io/f/301d3665-f166-4c29-9b87-090a9de3ae5d-22.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-30T11:11:34.313Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:13:58.915Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:13:58.913Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b8881e",
      },
      name: "Seeun",
      group: "StayC",
      rarity: "1",
      act: "ASAP",
      code: "SNASST1",
      image:
        "https://utfs.io/f/19106ad6-54ca-499b-9f6d-9cb7f6b2af5f-26ixd6.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-30T11:11:39.715Z",
      },
      updatedAt: {
        $date: "2024-11-30T13:54:05.480Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:13:58.913Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b8881f",
      },
      name: "Yoon",
      group: "StayC",
      rarity: "1",
      act: "ASAP",
      code: "YNASST1",
      image: "https://utfs.io/f/2ac03592-c3ef-4240-bc0e-4705a6d36003-1n6vp.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-30T11:11:44.556Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:13:58.915Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:13:58.913Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b88820",
      },
      name: "Sieun",
      group: "StayC",
      rarity: "1",
      act: "ASAP",
      code: "SIASST1",
      image:
        "https://utfs.io/f/2392f718-5052-47e3-8983-2cbf99f8fee1-1bk4nc.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-30T11:12:18.826Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:13:58.915Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:13:58.913Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "674b1a6e29a477eb57b88821",
      },
      name: "Sumin",
      group: "StayC",
      rarity: "1",
      act: "ASAP",
      code: "SMASST1",
      image:
        "https://utfs.io/f/2cd73a02-7294-48b2-9ca0-cce2d3532c23-1bry4w.png",
      releaseDate: {
        $date: "2024-11-30T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-11-30T11:12:24.147Z",
      },
      updatedAt: {
        $date: "2024-11-30T11:13:58.915Z",
      },
      approvedById: {
        $oid: "66d303bbf194a44e51d4f908",
      },
      approvedAt: {
        $date: "2024-11-30T11:13:58.913Z",
      },
      eventId: {
        $oid: "67420ea9fcc3074f62ea4f17",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a89679d",
      },
      name: "Winter",
      group: "AESPA",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "WRCHAE5",
      image:
        "https://utfs.io/f/c9cbf870-2537-4dad-9328-d68142c7f611-lq5fns.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:42:08.696Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a89679e",
      },
      name: "Jisoo",
      group: "BLACKPINK",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "JOCHBL5",
      image:
        "https://utfs.io/f/9d5de6fc-318b-4d23-9641-58d93bfee81d-4y1q96.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:42:14.470Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a89679f",
      },
      name: "Jaehyun",
      group: "Boynextdoor",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "JNCHBO5",
      image:
        "https://utfs.io/f/a4b71fad-8034-4bfa-87aa-0a669d1ea091-6tkyc2.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:42:22.825Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967a0",
      },
      name: "Suga",
      group: "BTS",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "SACHBT5",
      image:
        "https://utfs.io/f/347eeafe-9400-407e-a484-41643b337b3d-gc4koe.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:42:28.746Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967a1",
      },
      name: "Jake",
      group: "ENHYPEN",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "JECHEN5",
      image:
        "https://utfs.io/f/7be41817-7596-4289-9561-b2509188d12e-ovevb9.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:42:34.269Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967a2",
      },
      name: "Aisha",
      group: "EVERGLOW",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "AACHEV5",
      image:
        "https://utfs.io/f/752f139f-dc0a-4493-b68b-c73672cc26e7-dwcwx0.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:42:39.780Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967a3",
      },
      name: "June",
      group: "iKON",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "JECHIK5",
      image:
        "https://utfs.io/f/f288517c-07af-416e-b5e8-72f7860f1e6a-dc7llg.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:42:45.489Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967a4",
      },
      name: "Yeji",
      group: "ITZY",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "YICHIT5",
      image:
        "https://utfs.io/f/27e46ac3-6559-4465-a173-099dea2f3025-4gcwd0.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:42:51.174Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967a5",
      },
      name: "Chaewon",
      group: "LE SSERAFIM",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "CNCHLE5",
      image:
        "https://utfs.io/f/858f973d-3c53-43cd-aa68-e2a5b4392be7-2csqs7.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:42:56.744Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967a6",
      },
      name: "Yujeong",
      group: "LIGHTSUM",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "YGCHLI5",
      image:
        "https://utfs.io/f/4737340a-cd69-4a63-9daf-2fd125753e88-ezqm5p.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:43:01.162Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967a7",
      },
      name: "ViVi",
      group: "LOONA",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "VICHLO5",
      image:
        "https://utfs.io/f/4f478512-1cac-4591-a962-9db29585ac0d-68nbkq.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:43:06.072Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967a8",
      },
      name: "Chaehyun",
      group: "Kep1er",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "CNCHKE5",
      image:
        "https://utfs.io/f/d4c4e459-d547-47ee-b9f3-f18a02fa3f76-995cv2.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:43:13.772Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967a9",
      },
      name: "Huijun",
      group: "MCND",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "HNCHMC5",
      image:
        "https://utfs.io/f/d1daa15a-7f4c-4edb-8dd5-e2b9a80ecfb2-5oqdgy.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:43:18.644Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967aa",
      },
      name: "Jungwoo",
      group: "NCT 127",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "JOCHNC5",
      image:
        "https://utfs.io/f/6d310905-e5de-4bb4-a3b3-e66a12a6d240-ax7z1x.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:43:23.722Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967ab",
      },
      name: "Hanni",
      group: "NewJeans",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "HICHNE5",
      image:
        "https://utfs.io/f/c46a2114-a1bb-4efd-9c92-854a2df32593-ol4qm0.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:43:29.202Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967ac",
      },
      name: "Hwanwoong",
      group: "ONEUS",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "HGCHON5",
      image:
        "https://utfs.io/f/614154d6-4e45-48dd-8b9e-ef8c48cb8958-qjnfqz.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:52:13.076Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967ad",
      },
      name: "Yoojung",
      group: "OnlyOneOf",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "YGCHON5",
      image:
        "https://utfs.io/f/1c9063dd-8cc7-460e-9c3e-889dce1ba3d8-7bdfs5.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:52:17.828Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967ae",
      },
      name: "Soul",
      group: "P1Harmony",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "SLCHP15",
      image:
        "https://utfs.io/f/cf77ec80-cad7-4517-95d0-2f7888eaacc2-48ccld.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:52:22.728Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967af",
      },
      name: "Yeri",
      group: "Red Velvet",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "YICHRE5",
      image:
        "https://utfs.io/f/c899c7b1-7adf-4b36-b918-2b500848a5ec-g6w3rz.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:52:28.551Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967b0",
      },
      name: "Anton",
      group: "RIIZE",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "ANCHRI5",
      image:
        "https://utfs.io/f/bb9b32b8-8b10-4a01-8cce-d0f499a244a5-svwq0g.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:52:33.323Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:26.266Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:26.265Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967b1",
      },
      name: "The8",
      group: "Seventeen",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "T8CHSE5",
      image:
        "https://utfs.io/f/92d16846-0ca1-4ebc-9fbc-01532093016d-6la9lf.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:52:38.740Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967b2",
      },
      name: "Seohyun",
      group: "SNSD",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "SNCHSN5",
      image:
        "https://utfs.io/f/e007e82a-7bbd-4543-82e1-210118490da9-qv6d4w.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:52:43.891Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967b3",
      },
      name: "AleXa",
      group: "Soloist",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "AACHSO5",
      image:
        "https://utfs.io/f/e109b6ed-22df-4127-a6c5-7cdecb61a67a-xgk61x.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:52:49.331Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967b4",
      },
      name: "Jay B",
      group: "Soloist",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "JBCHSO5",
      image:
        "https://utfs.io/f/a2aa8560-7ceb-484b-8423-20b18ebab38b-xbso3o.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:52:54.935Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967b5",
      },
      name: "Jay Chang",
      group: "Soloist",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "JGCHSO5",
      image:
        "https://utfs.io/f/23896bf1-1a66-4c6b-b822-14ca28b85ec2-ip6odr.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:53:00.505Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967b6",
      },
      name: "Ong Seongwu",
      group: "Soloist",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "OUCHSO5",
      image:
        "https://utfs.io/f/51934ada-55c4-45a1-9f7f-62beb6de85c8-c3hqc4.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:53:05.125Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967b7",
      },
      name: "Soojin",
      group: "Soloist",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "SNCHSO5",
      image:
        "https://utfs.io/f/269e89a1-8086-49c7-a497-9164ece597b1-y953mk.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:53:10.091Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967b8",
      },
      name: "Taemin",
      group: "Soloist",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "TNCHSO5",
      image:
        "https://utfs.io/f/35b9d236-47bc-4089-90e9-225000131139-xzyx6m.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:53:15.185Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967b9",
      },
      name: "Youha",
      group: "Soloist",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "YACHSO5",
      image:
        "https://utfs.io/f/14ef887d-3f09-4a4d-9b40-535d89e0a878-x3auls.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:53:26.281Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967ba",
      },
      name: "Felix",
      group: "Stray Kids",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "FXCHST5",
      image:
        "https://utfs.io/f/00e1e1ff-cfe7-4b24-8329-ef54a304a9cf-fagyq5.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:56:19.332Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967bb",
      },
      name: "Jihoon",
      group: "TREASURE",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "JNCHTR5",
      image:
        "https://utfs.io/f/53a47ac9-eed0-42a8-a178-cbcb77ba1f9e-q71h07.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:56:24.006Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967bc",
      },
      name: "Yooyeon",
      group: "tripleS",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "YNCHTR5",
      image:
        "https://utfs.io/f/fae3abf5-2041-4441-b9a9-8d0bc33597c8-ob3b2e.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:56:29.643Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967bd",
      },
      name: "Dahyun",
      group: "TWICE",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "DNCHTW5",
      image:
        "https://utfs.io/f/a5430b26-4ce8-409f-99d9-43cf55ecc44e-3wrcoi.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:56:35.311Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967be",
      },
      name: "Yeonjun",
      group: "TXT",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "YNCHTX5",
      image:
        "https://utfs.io/f/e3b44839-c6c8-4993-ba19-aedc7dcbf918-uuc6vp.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:56:40.241Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967bf",
      },
      name: "Kangmin",
      group: "VERIVERY",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "KNCHVE5",
      image:
        "https://utfs.io/f/51621274-22d5-4d64-bfff-e1ec6f8ac1a1-egi5x0.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:56:45.802Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967c0",
      },
      name: "Soojin",
      group: "Weeekly",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "SNCHWE5",
      image:
        "https://utfs.io/f/65ed63e9-1d5f-489b-9225-275fb6296ba6-e90e7v.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:56:51.676Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967c1",
      },
      name: "Yoojung",
      group: "Weki Meki",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "YGCHWE5",
      image:
        "https://utfs.io/f/3b17a1bb-529b-4ce1-9844-f4df401586b4-1v2hv0.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:56:56.617Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967c2",
      },
      name: "Cheng Xiao",
      group: "WJSN",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "COCHWJ5",
      image:
        "https://utfs.io/f/fa23f487-3295-4a06-95e3-36073f9d25c3-5h17w5.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:57:01.787Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:04:43.234Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:04:43.233Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967c3",
      },
      name: "Zhang Hao",
      group: "ZEROBASEONE",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "ZOCHZE5",
      image:
        "https://utfs.io/f/bd6fa88f-b192-4d2b-914f-bf0802c531bf-j75suw.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T09:57:06.743Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:02:26.007Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:02:26.005Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
    {
      _id: {
        $oid: "67543fa0c1ecd2314a8967c4",
      },
      name: "Taeyeon",
      group: "Soloist",
      rarity: "5",
      act: "CHRISTMAS2024",
      code: "TYCHSO5",
      image:
        "https://utfs.io/f/32b18040-725e-4e5f-84fc-0cb4033aebe6-bhttx7.png",
      releaseDate: {
        $date: "2024-12-07T12:00:00.000Z",
      },
      createdById: {
        $oid: "66d2c91ac4437fe50e4926a3",
      },
      createdAt: {
        $date: "2024-12-07T10:07:30.111Z",
      },
      updatedAt: {
        $date: "2024-12-07T10:09:57.186Z",
      },
      approvedById: {
        $oid: "66d2c5c74b05b3e9d1eb2de1",
      },
      approvedAt: {
        $date: "2024-12-07T10:09:57.184Z",
      },
      eventId: {
        $oid: "674c22b338ffec8d52580e43",
      },
      dropAble: true,
      __v: 0,
    },
  ];

  // Step 2: Fetch issues from the database
  const issues = await prisma.issues.findMany({});
  console.log(`Fetched ${issues.length} issues from the database.`);

  // Step 3: Modify the items array and update the database
  for (const item of itemsArray) {
    console.log("Checking for:", item.name);

    const issuesFound = issues.find(
      (issue) => issue.name === item.name && issue.act === item.act
    );

    if (issuesFound) {
      console.log("Updating code for:", item.name);

      // Ensure `item.code` exists before updating
      if (item.code) {
        await prisma.issues.update({
          where: { id: issuesFound.id },
          data: { code: item.code },
        });
        console.log(
          `Updated code for issue ID ${issuesFound.id} with code: ${item.code}`
        );
      } else {
        console.error(`Skipping update for item as 'code' is missing:`, item);
      }
    } else {
      console.error(`No matching issue found for item:`, item);
    }
  }

  console.log("Database updated successfully!");
}
