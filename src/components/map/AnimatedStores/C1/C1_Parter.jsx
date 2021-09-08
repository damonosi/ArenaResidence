import React from "react";

import { Spring, animated } from "@react-spring/konva";

class C1Parter extends React.Component {
  state = { flag: false };
  handleEnter = () => this.setState((state) => ({ flag: !state.flag }));
  handleLeave = () => this.setState((state) => ({ flag: !state.flag }));
  render() {
    const { flag } = this.state;
    return (
      <Spring
        native
        from={{ opacity: 1 }}
        to={{
          opacity: flag ? 0.6 : 0,
        }}
      >
        {(props) => (
          <animated.Group
            {...props}
            onMouseLeave={this.handleLeave}
            onMouseEnter={this.handleEnter}
          >
            <animated.Line
              points={[639, 920, 640, 853, 107, 859, 106, 922]}
              key={11}
              // bezier={true}
              // tension={0.1}
              lineJoin={"round"}
              fillAfterStrokeEnabled={true}
              closed={true}
              // stroke={"rgba(255, 186, 0, .7)"}
              fill={"rgba(255, 186, 0, .7)"}
            />

            <animated.Label id="tooltip" x={300} y={890}>
              <animated.Tag
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
              <animated.Text
                color="red"
                text="Apasati pentru plan parter"
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

export default C1Parter;
