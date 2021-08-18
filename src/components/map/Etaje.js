import React, { useEffect, useState, useRef } from "react";

import { Line, Tag, Text, Label, Group } from "react-konva";

export const Parter = ({ onClick, onDblTap }) => {
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
  const groupRef = useRef();

  useEffect(() => {
    const node = groupRef.current;
    node.addEventListener("tap", function () {
      setOpacity(0.5);
      if (node.opacity === 0.5) {
        setOpacity(1);
      }
    });
    node.addEventListener("dbltap", function () {
      onDblTap();
    });
  }, [onDblTap]);

  return (
    <Group
      ref={groupRef}
      onClick={onClick}
      opacity={opacity}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        className="line"
        points={[781, 455, 1201, 457, 1205, 505, 784, 512]}
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
          lineJoin={"round"}
          pointerDirection={"left"}
          pointerWidth={10}
          pointerHeight={10}
          cornerRadius={5}
        />
        <Text
          color="red"
          text="Apasati pentru planul de etaj"
          fontSize={18}
          padding={5}
          fill="black"
        />
      </Label>
    </Group>
  );
};
export const Et1 = ({ onClick, onTap, onDblTap2 }) => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };
  const groupRef = useRef();
  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  useEffect(() => {
    const node = groupRef.current;
    node.addEventListener("tap", function () {
      setOpacity(0.5);
    });
    node.addEventListener("dbltap", function () {
      onDblTap2();
    });
  }, [onDblTap2]);
  return (
    <Group
      ref={groupRef}
      onTap={() => setOpacity(0.5)}
      onClick={onClick}
      opacity={opacity}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        opacity={opacity}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="line"
        points={[1197, 455, 1201, 414, 788, 399, 784, 451]}
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
export const Et2 = ({ onClick, onTap, onDblTap3 }) => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };
  const groupRef = useRef();
  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  useEffect(() => {
    const node = groupRef.current;
    node.addEventListener("tap", function () {
      setOpacity(0.5);
    });
    node.addEventListener("dbltap", function () {
      onDblTap3();
    });
  }, [onDblTap3]);
  return (
    <Group
      ref={groupRef}
      onTap={onTap}
      onClick={onClick}
      opacity={opacity}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        opacity={opacity}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="line"
        points={[924, 575, 1203, 413]}
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
export const Et3 = ({ onClick, onTap, onDblTap4 }) => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };
  const groupRef = useRef();
  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  useEffect(() => {
    const node = groupRef.current;
    node.addEventListener("tap", function () {
      setOpacity(0.5);
    });
    node.addEventListener("dbltap", function () {
      onDblTap4();
    });
  }, [onDblTap4]);
  return (
    <Group
      ref={groupRef}
      onTap={onTap}
      onClick={onClick}
      opacity={opacity}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        opacity={opacity}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="line"
        points={[1201, 410, 1198, 371, 789, 351, 789, 398]}
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
export const Et4 = ({ onClick, onTap, onDblTap5 }) => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };
  const groupRef = useRef();
  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  useEffect(() => {
    const node = groupRef.current;
    node.addEventListener("tap", function () {
      setOpacity(0.5);
    });
    node.addEventListener("dbltap", function () {
      onDblTap5();
    });
  }, [onDblTap5]);
  return (
    <Group
      ref={groupRef}
      onTap={onTap}
      onClick={onClick}
      opacity={opacity}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        opacity={opacity}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="line"
        points={[1199, 371, 1197, 329, 789, 299, 789, 349]}
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
export const Et5 = ({ onClick, onTap, onDblTap6 }) => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };
  const groupRef = useRef();
  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  useEffect(() => {
    const node = groupRef.current;
    node.addEventListener("tap", function () {
      setOpacity(0.5);
    });
    node.addEventListener("dbltap", function () {
      onDblTap6();
    });
  }, [onDblTap6]);
  return (
    <Group
      ref={groupRef}
      onTap={onTap}
      onClick={onClick}
      opacity={opacity}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        opacity={opacity}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="line"
        points={[1195, 324, 1196, 284, 789, 243, 790, 299]}
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
export const Et6 = ({ onClick, onTap, onDblTap7 }) => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };
  const groupRef = useRef();
  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  useEffect(() => {
    const node = groupRef.current;
    node.addEventListener("tap", function () {
      setOpacity(0.5);
    });
    node.addEventListener("dbltap", function () {
      onDblTap7();
    });
  }, [onDblTap7]);
  return (
    <Group
      ref={groupRef}
      onTap={onTap}
      onClick={onClick}
      opacity={opacity}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        opacity={opacity}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="line"
        points={[1195, 281, 1197, 244, 787, 189, 789, 242]}
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
export const Et7 = ({ onClick, onTap, onDblTap8, stageRef }) => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };
  const groupRef = useRef();
  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  useEffect(() => {
    const node = groupRef.current;
    node.addEventListener("tap", function () {
      setOpacity(0.5);
    });
    node.addEventListener("dbltap", function () {
      onDblTap8();
    });
  }, [onDblTap8]);
  return (
    <Group
      ref={groupRef}
      onTap={onTap}
      onClick={onClick}
      opacity={opacity}
      onMouseOver={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        className="line"
        points={[1200, 243, 1195, 192, 785, 142, 785, 189]}
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

export const Et8 = ({ onClick, onTap, onDblTap9 }) => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer";
    setOpacity(0.5);
  };
  const groupRef = useRef();
  const handleLeave = (e) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "auto";
    setOpacity(0);
  };
  useEffect(() => {
    const node = groupRef.current;
    node.addEventListener("tap", function () {
      setOpacity(0.5);
    });
    node.addEventListener("dbltap", function () {
      onDblTap9();
    });
  }, [onDblTap9]);
  return (
    <Group
      ref={groupRef}
      onTap={onTap}
      onClick={onClick}
      opacity={opacity}
      onMouseOver={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Line
        className="line"
        points={[
          1197, 193, 1198, 171, 1166, 164, 1168, 122, 791, 62, 793, 109, 771,
          108, 784, 143,
        ]}
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
