import React, { useState } from "react";

import { Line, Tag, Text, Label, Group } from "react-konva";

export const Parter = () => {
  const [opacity, setOpacity] = useState(0);

  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };

  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };

  return (
    <Group
      opacity={opacity}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        className="line"
        points={[900, 471, 902, 506, 758, 520, 757, 480]}
        key={11}
        tension={0.5}
        closed={true}
        stroke={"rgba(255, 186, 0, .7)"}
        fill={"rgba(255, 186, 0, .7)"}
      />
      <Label id="tooltip" x={800} y={500}>
        <Tag
          fill={"#bbb"}
          stroke={"#333"}
          shadowColor={"black"}
          shadowBlur={10}
          shadowOffsetX={10}
          shadowOffsetY={10}
          shadowOpacity={0.5}
          lineJoin="round"
          pointerDirection="left"
          pointerWidth={10}
          pointerHeight={10}
          cornerRadius={5}
        />
        <Text
          color="white"
          text="Apasati pentru planul de etaj"
          fontSize={18}
          padding={5}
          fill="black"
        />
      </Label>
    </Group>
  );
};
export const Et1 = () => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };

  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  return (
    <Group
      opacity={opacity}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        opacity={opacity}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="line"
        points={[902, 472, 905, 433, 767, 431, 767, 479]}
        key={12}
        tension={0.5}
        closed={true}
        stroke={"yellow"}
        fill={"yellow"}
      />
      <Label id="tooltip" x={800} y={450}>
        <Tag
          fill={"#bbb"}
          stroke={"#333"}
          shadowColor={"black"}
          shadowBlur={10}
          shadowOffsetX={10}
          shadowOffsetY={10}
          shadowOpacity={0.5}
          lineJoin="round"
          pointerDirection="left"
          pointerWidth={10}
          pointerHeight={10}
          cornerRadius={5}
        />
        <Text
          color="white"
          text="Apasati pentru planul de etaj"
          fontSize={18}
          padding={5}
          fill="black"
        />
      </Label>
    </Group>
  );
};
export const Et2 = () => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };

  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  return (
    <Group
      opacity={opacity}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        opacity={opacity}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="line"
        points={[903, 434, 905, 399, 765, 391, 767, 432]}
        key={13}
        tension={0.5}
        closed={true}
        stroke={"yellow"}
        fill={"yellow"}
      />
      <Label id="tooltip" x={800} y={400}>
        <Tag
          fill={"#bbb"}
          stroke={"#333"}
          shadowColor={"black"}
          shadowBlur={10}
          shadowOffsetX={10}
          shadowOffsetY={10}
          shadowOpacity={0.5}
          lineJoin="round"
          pointerDirection="left"
          pointerWidth={10}
          pointerHeight={10}
          cornerRadius={5}
        />
        <Text
          color="white"
          text="Apasati pentru planul de etaj"
          fontSize={18}
          padding={5}
          fill="black"
        />
      </Label>
    </Group>
  );
};
export const Et3 = () => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };

  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  return (
    <Group
      opacity={opacity}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        opacity={opacity}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="line"
        points={[907, 399, 906, 369, 767, 351, 772, 394]}
        key={14}
        tension={0.5}
        closed={true}
        stroke={"yellow"}
        fill={"yellow"}
      />
      <Label id="tooltip" x={800} y={350}>
        <Tag
          fill={"#bbb"}
          stroke={"#333"}
          shadowColor={"black"}
          shadowBlur={10}
          shadowOffsetX={10}
          shadowOffsetY={10}
          shadowOpacity={0.5}
          lineJoin="round"
          pointerDirection="left"
          pointerWidth={10}
          pointerHeight={10}
          cornerRadius={5}
        />
        <Text
          color="white"
          text="Apasati pentru planul de etaj"
          fontSize={18}
          padding={5}
          fill="black"
        />
      </Label>
    </Group>
  );
};
export const Et4 = () => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };

  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  return (
    <Group
      opacity={opacity}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        opacity={opacity}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="line"
        points={[906, 369, 904, 332, 770, 311, 770, 351]}
        key={15}
        tension={0.5}
        closed={true}
        stroke={"yellow"}
        fill={"yellow"}
      />
      <Label id="tooltip" x={800} y={300}>
        <Tag
          fill={"#bbb"}
          stroke={"#333"}
          shadowColor={"black"}
          shadowBlur={10}
          shadowOffsetX={10}
          shadowOffsetY={10}
          shadowOpacity={0.5}
          lineJoin="round"
          pointerDirection="left"
          pointerWidth={10}
          pointerHeight={10}
          cornerRadius={5}
        />
        <Text
          color="white"
          text="Apasati pentru planul de etaj"
          fontSize={18}
          padding={5}
          fill="black"
        />
      </Label>
    </Group>
  );
};
export const Et5 = () => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };

  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  return (
    <Group
      opacity={opacity}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        opacity={opacity}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="line"
        points={[901, 332, 901, 294, 769, 269, 769, 312]}
        key={16}
        tension={0.5}
        closed={true}
        stroke={"yellow"}
        fill={"yellow"}
      />
      <Label id="tooltip" x={800} y={280}>
        <Tag
          fill={"#bbb"}
          stroke={"#333"}
          shadowColor={"black"}
          shadowBlur={10}
          shadowOffsetX={10}
          shadowOffsetY={10}
          shadowOpacity={0.5}
          lineJoin="round"
          pointerDirection="left"
          pointerWidth={10}
          pointerHeight={10}
          cornerRadius={5}
        />
        <Text
          color="white"
          text="Apasati pentru planul de etaj"
          fontSize={18}
          padding={5}
          fill="black"
        />
      </Label>
    </Group>
  );
};
export const Et6 = () => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };

  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  return (
    <Group
      opacity={opacity}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        opacity={opacity}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="line"
        points={[898, 294, 899, 255, 769, 228, 769, 270]}
        key={17}
        tension={0.5}
        closed={true}
        stroke={"yellow"}
        fill={"yellow"}
      />
      <Label id="tooltip" x={800} y={210}>
        <Tag
          fill={"#bbb"}
          stroke={"#333"}
          shadowColor={"black"}
          shadowBlur={10}
          shadowOffsetX={10}
          shadowOffsetY={10}
          shadowOpacity={0.5}
          lineJoin="round"
          pointerDirection="left"
          pointerWidth={10}
          pointerHeight={10}
          cornerRadius={5}
        />
        <Text
          color="white"
          text="Apasati pentru planul de etaj"
          fontSize={18}
          padding={5}
          fill="black"
        />
      </Label>
    </Group>
  );
};
export const Et7 = () => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };

  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  return (
    <Group
      opacity={opacity}
      onMouseOver={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        className="line"
        points={[898, 254, 900, 225, 767, 189, 770, 227]}
        key={18}
        tension={0.5}
        closed={true}
        stroke={"yellow"}
        fill={"yellow"}
      />
      <Label id="tooltip" x={800} y={200}>
        <Tag
          fill={"#bbb"}
          stroke={"#333"}
          shadowColor={"black"}
          shadowBlur={10}
          shadowOffsetX={10}
          shadowOffsetY={10}
          shadowOpacity={0.5}
          lineJoin="round"
          pointerDirection="left"
          pointerWidth={10}
          pointerHeight={10}
          cornerRadius={5}
        />
        <Text
          color="white"
          text="Apasati pentru planul de etaj"
          fontSize={18}
          padding={5}
          fill="black"
        />
      </Label>
    </Group>
  );
};

export const Et8 = () => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };

  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  return (
    <Group
      opacity={opacity}
      onMouseOver={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        className="line"
        points={[899, 224, 891, 174, 775, 126, 769, 189]}
        key={19}
        tension={0.5}
        closed={true}
        stroke={"yellow"}
        fill={"yellow"}
      />
      <Label id="tooltip" x={800} y={130}>
        <Tag
          fill={"#bbb"}
          stroke={"#333"}
          shadowColor={"black"}
          shadowBlur={10}
          shadowOffsetX={10}
          shadowOffsetY={10}
          shadowOpacity={0.5}
          lineJoin="round"
          pointerDirection="left"
          pointerWidth={10}
          pointerHeight={10}
          cornerRadius={5}
        />
        <Text
          color="white"
          text="Apasati pentru planul de etaj"
          fontSize={18}
          padding={5}
          fill="black"
        />
      </Label>
    </Group>
  );
};
