import React from "react";

import { Spring, animated } from "@react-spring/konva";
import { Responsive } from "./../../../../responsiveComponent/Responsive";

class C1Parter extends React.Component {
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
                points={[776, 813, 776, 754, 131, 757, 131, 813, 701, 813]}
                key={11}
                // bezier={true}
                // tension={0.1}
                lineJoin={"round"}
                fillAfterStrokeEnabled={true}
                closed={true}
                // stroke={"rgba(255, 186, 0, .7)"}
                fill={"rgba(255, 186, 0, .7)"}
              />
              <animated.Label id="tooltip" x={780} y={790}>
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
                  text="Plan Parter"
                  fontSize={18}
                  padding={5}
                  fill="black"
                />
              </animated.Label>
            </Responsive>
            <Responsive displayIn={["Mobile"]}>
              <animated.Line
                points={[311, 495, 51, 499, 51, 537, 311, 532]}
                key={11}
                // bezier={true}
                // tension={0.1}
                lineJoin={"round"}
                fillAfterStrokeEnabled={true}
                closed={true}
                // stroke={"rgba(255, 186, 0, .7)"}
                fill={"rgba(255, 186, 0, .7)"}
              />
              <animated.Label id="tooltip" x={130} y={503}>
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
                  text="Plan Parter"
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

export default C1Parter;
