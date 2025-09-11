import { useEffect, useRef, useState } from "react";
import ThemedImg from "./ThemedImg";

function starDistribution(x: number): number {
  return Math.sin((x - 0.5) * Math.PI) * 0.5 + 0.5;
}

function randomOffset(
  width: number,
  height: number,
  overshootX = 2,
  overshootY = 1,
  shift = 8
) {
  const x =
    starDistribution(Math.random()) * (width + overshootX * 2) -
    overshootX -
    shift;
  const y =
    starDistribution(Math.random()) * (height + overshootY * 2) -
    overshootY -
    shift;

  return { x, y };
}

function Sparkle({
  widthBounds,
  heightBounds,
}: {
  widthBounds: number;
  heightBounds: number;
}) {
  const [position, setPosition] = useState(() => ({
    x: 0,
    y: 0,
  }));
  const [wait, setWait] = useState(true);
  const lastSizeRef = useRef<{ w: number; h: number }>({
    w: widthBounds,
    h: heightBounds,
  });
  const waitTimer = useRef<NodeJS.Timeout>(null);

  // Change position if parent size changes
  useEffect(() => {
    if (
      widthBounds !== 0 &&
      heightBounds !== 0 &&
      widthBounds !== lastSizeRef.current.w &&
      heightBounds !== lastSizeRef.current.h
    ) {
      // Also, stop waiting after initial update
      if (lastSizeRef.current.w === 0 && lastSizeRef.current.h === 0) {
        cancelWait();
        waitTimer.current = setTimeout(() => {
          waitTimer.current = null;
          setWait(false);
        }, 100 + Math.random() * 2900);
      }

      lastSizeRef.current = {
        w: widthBounds,
        h: heightBounds,
      };
      setPosition(randomOffset(widthBounds, heightBounds));
    }
  }, [widthBounds, heightBounds]);

  useEffect(() => () => cancelWait(), []);

  function cancelWait() {
    if (waitTimer.current != null) {
      clearTimeout(waitTimer.current);
      waitTimer.current = null;
    }
  }

  return (
    <div
      className="absolute"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <style>
        {`
          @keyframes fade {
            0%, 100% { opacity: 0; }
            50%      { opacity: 0.3; }
          }
        `}
      </style>
      <ThemedImg
        src={"otherimages/goldstart.png"}
        alt="star"
        reColor="bg-accent"
        className={`w-4 h-4 ${
          widthBounds === 0 && heightBounds === 0 ? "hidden" : ""
        }`}
        style={{
          opacity: 0,
          animation: wait ? "" : "fade 1.5s ease-in-out",
        }}
        onAnimationEnd={() => {
          if (waitTimer.current === null) {
            setWait(() => {
              setPosition(randomOffset(widthBounds, heightBounds));
              waitTimer.current = setTimeout(() => {
                waitTimer.current = null;
                setWait(() => {
                  return false;
                });
              }, 1000 + Math.random() * 500);
              return true;
            });
          }
        }}
      />
    </div>
  );
}

export default Sparkle;
