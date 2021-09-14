import React from "react";

import { Spring, animated } from "@react-spring/konva";

class ScaraC2 extends React.Component {
  state = { flag: false };
  handleEnter = () => this.setState((state) => ({ flag: !state.flag }));
  handleLeave = () => this.setState((state) => ({ flag: !state.flag }));
  handleTouchStart = () => this.setState((state) => ({ flag: !state.flag }));
  render() {
    const { flag } = this.state;
    return (
      <Spring
        config={{ duration: 1 }}
        from={{ opacity: 1 }}
        to={{
          opacity: flag ? 0.9 : 0.1,
        }}
      >
        {(props) => (
          <animated.Group
            {...props}
            onMouseLeave={this.handleLeave}
            onMouseEnter={this.handleEnter}
            onTouchStart={this.handleTouchStart}
          >
            <animated.Line
              points={[
                1407, 813, 1404, 760, 1421, 759, 1419, 344, 1447, 344, 1447,
                305, 1404, 305, 1403, 266, 1390, 266, 1390, 248, 776, 237, 776,
                819,
              ]}
              // bezier={true}
              // tension={0.1}
              lineJoin={"round"}
              fillAfterStrokeEnabled={true}
              closed={true}
              // stroke={"rgba(255, 186, 0, .7)"}
              fill={"rgba(255, 186, 0, .7)"}
            />

            <animated.Label id="tooltip" x={1050} y={120}>
              <animated.Tag
                fill={"#bbb"}
                stroke={"#333"}
                shadowColor={"black"}
                shadowBlur={10}
                shadowOffsetX={10}
                shadowOffsetY={10}
                shadowOpacity={0.5}
                lineJoin={"round"}
                pointerDirection={"bottom"}
                pointerWidth={10}
                pointerHeight={10}
                cornerRadius={5}
              />
              <animated.Text
                color="red"
                text="Scara C2"
                fontSize={18}
                padding={5}
                fill="black"
              />
            </animated.Label>
          </animated.Group>
        )}
      </Spring>
    );
  }
}

export default ScaraC2;
