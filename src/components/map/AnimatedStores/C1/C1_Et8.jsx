import React from "react";

import { Spring, animated } from "@react-spring/konva";
import { Responsive } from "./../../../../responsiveComponent/Responsive";

class C1Et8 extends React.Component {
  state = { flag: false };
  handleEnter = () => this.setState((state) => ({ flag: !state.flag }));
  handleLeave = () => this.setState((state) => ({ flag: !state.flag }));
  handleTouchStart = () => this.setState((state) => ({ flag: !state.flag }));
  render() {
    const { flag } = this.state;
    return (
      <Spring
        native
        config={{ duration: 10 }}
        from={{ opacity: 1 }}
        to={{
          opacity: flag ? 1 : 0,
        }}
      >
        {(props) => (
          <animated.Group
            {...props}
            onMouseLeave={this.handleLeave}
            onMouseEnter={this.handleEnter}
            onTouchStart={this.handleTouchStart}
          >
            <Responsive displayIn={["Laptop"]}>
              <animated.Line
                points={[
                  779, 336, 779, 243, 145, 235, 147, 252, 135, 256, 135, 295,
                  90, 296, 90, 335,
                ]}
                key={11}
                // bezier={true}
                // tension={0.1}
                lineJoin={"round"}
                fillAfterStrokeEnabled={true}
                closed={true}
                // stroke={"rgba(255, 186, 0, .7)"}
                fill={"rgba(255, 186, 0, .7)"}
              />
              <animated.Label id="tooltip" x={780} y={280}>
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
                  text="Plan Etaj 8"
                  fontSize={18}
                  padding={5}
                  fill="black"
                />
              </animated.Label>{" "}
            </Responsive>
            <Responsive displayIn={["Mobile"]}>
              <animated.Line
                points={[
                  312, 218, 311, 158, 59, 156, 59, 167, 53, 169, 53, 193, 36,
                  193, 37, 215,
                ]}
                key={11}
                // bezier={true}
                // tension={0.1}
                lineJoin={"round"}
                fillAfterStrokeEnabled={true}
                closed={true}
                // stroke={"rgba(255, 186, 0, .7)"}
                fill={"rgba(255, 186, 0, .7)"}
              />
              <animated.Label id="tooltip" x={130} y={174}>
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
                  text="Plan Etaj 8"
                  fontSize={18}
                  padding={5}
                  fill="black"
                />
              </animated.Label>
            </Responsive>
          </animated.Group>
        )}
      </Spring>
    );
  }
}

export default C1Et8;
