"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Issues } from "@prisma/client";
import { motion } from "framer-motion";

import { designFeatures } from "@/config/features";

import { FeatureList } from "./feature-list";
import { InfiniteScroll, InfinityScrollItem } from "./infinite-scroll";

interface SectionTwoProps {
  issue: Issues;
}

export default function SectionTwo({ issue }: SectionTwoProps) {
  const frames = [
    "https://cdn.discordapp.com/attachments/1300106668620648458/1307737583228555284/France_Frame_1.png?ex=6761a088&is=67604f08&hm=90ea64974159ee40d7ca7ded3828594954884b75f697022bd8c260179b5325e2&",
    "https://cdn.discordapp.com/attachments/1300106668620648458/1307294749367074836/hlw_sppoky_frame.png?ex=6761559c&is=6760041c&hm=0262acd8c5bd8db0c570d6b86ec5fd4eed97237f7be52f24dc69ccdcd7f800e9&",
    "https://cdn.discordapp.com/attachments/1300106668620648458/1303736589360300212/Space_Frame.png?ex=676192d1&is=67604151&hm=c87c9ca162ffb5036267df865520f86c9bd7ef22b093d90fe1616c284ee24036&",
    "https://cdn.discordapp.com/attachments/1300106668620648458/1301300500163072000/fall_border.gif?ex=676147c8&is=675ff648&hm=07b71ffb6a7235dc7ee6e915139f69c62a22286a0680972005cd0fe8c22701ca&",
  ];

  const fonts: InfinityScrollItem[] = [
    { url: "/fonts/inter.png", alt: "inter" },
    { url: "/fonts/lato.png", alt: "lato" },
    { url: "/fonts/montserrat.png", alt: "montserrat" },
    { url: "/fonts/opensans.png", alt: "opensans" },
  ];

  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedFont, setSelectedFont] = useState<InfinityScrollItem>();
  const [selectedFrame, setSelectedFrame] = useState<InfinityScrollItem>();

  const { setNodeRef: droppableRef } = useDroppable({
    id: "drop-zone",
  });

  const handleDragStart = (event: any) => {
    setActiveId(event.active.src);
  };

  const handleDragEnd = (event: any) => {
    const item = event.active.data.current;
    if (item.identifier === "font") {
      setSelectedFont(item);
    } else {
      setSelectedFrame({ url: item.src, alt: item.id });
    }
    setActiveId(null);
  };

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const renderCanvas = async () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const img = new window.Image();
    img.src = issue.image;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      if (selectedFrame) {
        const frameImg = new window.Image();
        frameImg.src = selectedFrame.url;
        frameImg.onload = () => {
          const frameWidth = canvas.width;
          const frameHeight = canvas.height;

          ctx.drawImage(frameImg, 0, 0, frameWidth, frameHeight);
          drawText(ctx);
        };
      } else {
        drawText(ctx);
      }
    };

    const drawText = (ctx: CanvasRenderingContext2D) => {
      const fontFamily = selectedFont?.alt || "Arial";
      const fontStroke = "black";
      const fontFill = "white";
      const defaultFontSize = 25;
      const smallerFontSize = 20;
      const actFontSize = 10;
      const xAxis = 30;

      ctx.font = `${issue.name.length > 7 ? smallerFontSize : defaultFontSize}px ${fontFamily}`;
      ctx.fillStyle = fontFill;
      ctx.strokeStyle = fontStroke;
      ctx.lineWidth = 2;

      ctx.strokeText(issue.name || "Card Name", xAxis, 180);
      ctx.fillText(issue.name || "Card Name", xAxis, 180);

      ctx.font = `${actFontSize}px ${fontFamily}`;
      const yOffset =
        issue?.name?.length > 7 ? smallerFontSize : defaultFontSize;
      ctx.strokeText(issue?.act || "Act", xAxis, 180 - yOffset);
      ctx.fillText(issue?.act || "Act", xAxis, 180 - yOffset);
    };
  };

  useEffect(() => {
    renderCanvas();
  }, [selectedFont, selectedFrame]);

  return (
    <div className="flex min-h-screen flex-col-reverse items-center justify-evenly gap-20 bg-background md:flex-row">
      <div className="flex flex-col space-y-10">
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="relative flex justify-evenly p-2" ref={droppableRef}>
            <div className="grid grid-cols-2">
              {frames.map((frame, index) => (
                <DraggableImage
                  key={index}
                  id={index.toString()}
                  src={frame}
                  width={100}
                  height={100}
                  identifier="frame"
                />
              ))}
            </div>
            <canvas
              ref={canvasRef}
              width={200}
              height={200}
              style={{ backgroundColor: "transparent" }}
            ></canvas>

            <div className="absolute -right-64 -top-28 m-4 hidden flex-row md:flex">
              <svg
                width="300"
                height="108"
                viewBox="0 0 317 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M316 1C260.117 33.7801 208.59 52.7213 178.789 57.0934M178.789 57.0934C155.975 60.4405 145.894 55.2489 156.34 41.191C175.613 15.2544 179.336 40.9857 178.789 57.0934ZM178.789 57.0934C166.232 69.8339 136.629 93.3322 118.67 85.4012C100.711 77.4702 86.0738 82.0966 81 85.4012"
                  stroke="white"
                  strokeDasharray="15 15"
                />
                <line
                  y1="-0.5"
                  x2="43.9172"
                  y2="-0.5"
                  transform="matrix(-0.265407 0.964137 -0.921656 -0.388007 90.8379 44.3125)"
                  stroke="white"
                  strokeDasharray="15 15"
                />
                <line
                  y1="-0.5"
                  x2="32.5733"
                  y2="-0.5"
                  transform="matrix(0.771586 0.636125 -0.474527 0.880241 79.182 86.6548)"
                  stroke="white"
                  strokeDasharray="15 15"
                />
                <path
                  d="M0.113636 76.7273L0.181818 76.3636H8.04545L7.97727 76.7273H4.22727L2.36364 88H2L3.86364 76.7273H0.113636ZM7.72443 88L9.17898 79.2727H9.54261L9.31534 80.6591H9.3608C9.63352 80.2045 10.0275 79.8409 10.5426 79.5682C11.0616 79.2955 11.6222 79.1591 12.2244 79.1591C12.2699 79.1591 12.3002 79.1591 12.3153 79.1591C12.3305 79.1591 12.3608 79.1591 12.4062 79.1591L12.3381 79.5227C12.2926 79.5227 12.2623 79.5227 12.2472 79.5227C12.232 79.5227 12.2017 79.5227 12.1562 79.5227C11.6411 79.5227 11.1638 79.6345 10.7244 79.858C10.2888 80.0814 9.9233 80.3902 9.62784 80.7841C9.33617 81.178 9.14867 81.6288 9.06534 82.1364L8.08807 88H7.72443ZM13.0455 91.2727C12.8977 91.2727 12.7443 91.2519 12.5852 91.2102C12.4299 91.1723 12.2727 91.1174 12.1136 91.0455L12.2955 90.7273C12.6288 90.8902 12.9527 90.9451 13.267 90.892C13.5852 90.8428 13.8845 90.6932 14.1648 90.4432C14.4451 90.197 14.697 89.8598 14.9205 89.4318L15.6023 88.1364L13.9205 79.2727H14.2841L15.8636 87.5455H15.9091L20.2386 79.2727H20.6477L15.25 89.5909C15.0568 89.9583 14.8409 90.267 14.6023 90.517C14.3674 90.767 14.1174 90.9545 13.8523 91.0795C13.5871 91.2083 13.3182 91.2727 13.0455 91.2727ZM26.098 88L27.5526 79.2727H27.9162L26.4616 88H26.098ZM28.0185 77.6818C27.9048 77.6818 27.8139 77.642 27.7457 77.5625C27.6813 77.483 27.6586 77.3864 27.6776 77.2727C27.6927 77.1932 27.7382 77.1212 27.8139 77.0568C27.8897 76.9886 27.973 76.9545 28.0639 76.9545C28.1776 76.9545 28.2666 76.9943 28.331 77.0739C28.3991 77.1534 28.4238 77.25 28.4048 77.3636C28.3897 77.447 28.3442 77.5208 28.2685 77.5852C28.1927 77.6496 28.1094 77.6818 28.0185 77.6818ZM33.7812 79.2727L33.7131 79.6364H30.2585L30.3267 79.2727H33.7812ZM31.9403 77.1818H32.304L30.8267 86.1591C30.7661 86.5 30.7907 86.7936 30.9006 87.0398C31.0104 87.2822 31.179 87.4697 31.4062 87.6023C31.6335 87.7311 31.8949 87.7955 32.1903 87.7955C32.2926 87.7955 32.3911 87.786 32.4858 87.767C32.5843 87.7443 32.6903 87.7159 32.804 87.6818L32.8494 88.0227C32.7244 88.0682 32.6051 88.1023 32.4915 88.125C32.3816 88.1477 32.2585 88.1591 32.1222 88.1591C31.7661 88.1591 31.4498 88.0777 31.1733 87.9148C30.9006 87.7519 30.696 87.5208 30.5597 87.2216C30.4271 86.9223 30.3949 86.5682 30.4631 86.1591L31.9403 77.1818ZM42.7528 88.1818C42.0634 88.1818 41.4763 87.983 40.9915 87.5852C40.5104 87.1875 40.1657 86.6439 39.9574 85.9545C39.7528 85.2652 39.7225 84.4848 39.8665 83.6136C40.0104 82.7652 40.2945 82.0038 40.7188 81.3295C41.1468 80.6515 41.6619 80.1174 42.2642 79.7273C42.8703 79.3333 43.5104 79.1364 44.1847 79.1364C44.8816 79.1364 45.4706 79.3371 45.9517 79.7386C46.4366 80.1402 46.7813 80.6856 46.9858 81.375C47.1941 82.0644 47.2301 82.8409 47.0938 83.7045C46.9498 84.553 46.6638 85.3163 46.2358 85.9943C45.8078 86.6686 45.2907 87.2027 44.6847 87.5966C44.0786 87.9867 43.4347 88.1818 42.7528 88.1818ZM42.7528 87.8182C43.3816 87.8182 43.9744 87.6364 44.5312 87.2727C45.0881 86.9053 45.5616 86.4053 45.9517 85.7727C46.3419 85.1364 46.6013 84.4167 46.7301 83.6136C46.8589 82.8333 46.8343 82.1326 46.6562 81.5114C46.4782 80.8902 46.1771 80.3996 45.7528 80.0398C45.3286 79.6799 44.8134 79.5 44.2074 79.5C43.5862 79.5 42.9972 79.6856 42.4403 80.0568C41.8835 80.4242 41.4081 80.9261 41.0142 81.5625C40.6203 82.1951 40.3589 82.9091 40.2301 83.7045C40.0938 84.4848 40.1146 85.1856 40.2926 85.8068C40.4744 86.428 40.7775 86.9186 41.2017 87.2784C41.6297 87.6383 42.1468 87.8182 42.7528 87.8182ZM55.0412 85.1364L56.0185 79.2727H56.3821L54.9276 88H54.5639L54.7912 86.6136H54.7457C54.473 87.0682 54.0772 87.4318 53.5582 87.7045C53.0431 87.9773 52.4844 88.1136 51.8821 88.1136C51.2988 88.1136 50.8045 87.9867 50.3991 87.733C49.9938 87.4792 49.7022 87.1288 49.5241 86.6818C49.3461 86.2348 49.3063 85.7197 49.4048 85.1364L50.3821 79.2727H50.7457L49.7685 85.1364C49.6435 85.9091 49.7817 86.5379 50.1832 87.0227C50.5885 87.5076 51.1776 87.75 51.9503 87.75C52.4654 87.75 52.9408 87.6383 53.3764 87.4148C53.8158 87.1913 54.1813 86.8826 54.473 86.4886C54.7685 86.0947 54.9579 85.6439 55.0412 85.1364ZM62.2031 79.2727L62.1349 79.6364H58.6804L58.7486 79.2727H62.2031ZM60.3622 77.1818H60.7259L59.2486 86.1591C59.188 86.5 59.2126 86.7936 59.3224 87.0398C59.4323 87.2822 59.6009 87.4697 59.8281 87.6023C60.0554 87.7311 60.3168 87.7955 60.6122 87.7955C60.7145 87.7955 60.813 87.786 60.9077 87.767C61.0062 87.7443 61.1122 87.7159 61.2259 87.6818L61.2713 88.0227C61.1463 88.0682 61.027 88.1023 60.9134 88.125C60.8035 88.1477 60.6804 88.1591 60.544 88.1591C60.188 88.1591 59.8717 88.0777 59.5952 87.9148C59.3224 87.7519 59.1179 87.5208 58.9815 87.2216C58.849 86.9223 58.8168 86.5682 58.8849 86.1591L60.3622 77.1818ZM66.2429 76.3636L64.8793 84.5455H64.5156L65.8793 76.3636H66.2429ZM64.152 88.0682C64.0384 88.0682 63.9455 88.0284 63.8736 87.9489C63.8054 87.8693 63.777 87.7727 63.7884 87.6591C63.7997 87.5455 63.849 87.4489 63.9361 87.3693C64.027 87.2898 64.1293 87.25 64.2429 87.25C64.3565 87.25 64.4474 87.2898 64.5156 87.3693C64.5876 87.4489 64.6179 87.5455 64.6065 87.6591C64.599 87.7348 64.5724 87.8049 64.527 87.8693C64.4853 87.9299 64.4304 87.9773 64.3622 88.0114C64.2978 88.0492 64.2277 88.0682 64.152 88.0682ZM70.4304 76.3636L69.0668 84.5455H68.7031L70.0668 76.3636H70.4304ZM68.3395 88.0682C68.2259 88.0682 68.133 88.0284 68.0611 87.9489C67.9929 87.8693 67.9645 87.7727 67.9759 87.6591C67.9872 87.5455 68.0365 87.4489 68.1236 87.3693C68.2145 87.2898 68.3168 87.25 68.4304 87.25C68.544 87.25 68.6349 87.2898 68.7031 87.3693C68.7751 87.4489 68.8054 87.5455 68.794 87.6591C68.7865 87.7348 68.7599 87.8049 68.7145 87.8693C68.6728 87.9299 68.6179 87.9773 68.5497 88.0114C68.4853 88.0492 68.4152 88.0682 68.3395 88.0682Z"
                  fill="white"
                  // transform="scale(1.5, 1.5) "
                />
              </svg>
            </div>
          </div>

          <DragOverlay>
            {activeId ? (
              <Image
                src={activeId}
                alt="Dragging item"
                width={100}
                height={100}
                className="object-cover"
              />
            ) : null}
          </DragOverlay>
          <div className="group flex flex-wrap gap-4">
            {fonts.map((font, index) => (
              <DraggableImage
                key={index}
                id={font.alt}
                src={font.url}
                width={100}
                height={100}
                identifier="font"
              />
            ))}
          </div>
        </DndContext>
      </div>

      <div className="space-y-10">
        <h2 className="animateScroll scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Design Your Perfect Card
        </h2>
        <FeatureList
          features={designFeatures}
          dynamicColorIndexes={[2]}
          dynamicFontIndexes={[1]}
        />
      </div>
    </div>
  );
}

function DraggableImage({
  id,
  src,
  width,
  height,
  identifier,
}: {
  id: string;
  src: string;
  width: number;
  height: number;
  identifier: "frame" | "font";
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { src, alt: id, identifier },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Image
        src={src}
        alt="Draggable"
        width={width}
        height={height}
        className="cursor-pointer rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}
