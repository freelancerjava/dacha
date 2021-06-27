import { useEffect, useState } from "react"

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}

export function useOnClickOutsideMenu(ref, handler) {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}

export function useOnKeypress(handler) {
  useEffect(() => {
    const listener = event => {
      if (event.key === "Escape" || event.key === "Esc") {
        handler(event)
      }
    }

    document.addEventListener("keydown", listener)
    document.addEventListener("keyup", listener)

    return () => {
      document.removeEventListener("keydown", listener)
      document.removeEventListener("keyup", listener)
    }
  }, [handler])
}


export function useScroll(ref, handler1, handler2) {
  const [mystart, setstart] = useState(0);
  useEffect(() => {
    const listener = event => {

      if (event.deltaY >= 0) {
        // console.log("down");
        handler1(event)
      }
      else {
        // console.log("up");
        handler2(event)
      }
      // console.log(event);
    }

    var start = { x: 0, y: 0 };
    var offset = { x: 0, y: 0 };


    function touchStart(event) {
      // start.x = event.touches[0].pageX;
      // start.y = event.touches[0].pageY;
      // // console.log("start", event.touches[0].pageY);

      // setstart(start.x)

    }

    function touchMove(event) {

      // offset.x = start.x - event.touches[0].pageX;
      // offset.y = start.y - event.touches[0].pageY;

      // // console.log("move", event.touches[0].pageY);


      // if (offset.y >= 0) {
      //   console.log("down", mystart, event.touches[0].pageY);
      //   handler1(event)
      // }
      // else {
      //   console.log("up", mystart, event.touches[0].pageY);
      //   handler2(event)
      // }
      // // console.log(event);
      // return offset;
    }

    window.addEventListener("wheel", listener)
    window.addEventListener("touchstart", touchStart)
    window.addEventListener("touchmove", touchMove)

    return () => {
      window.removeEventListener("wheel", listener)
      window.removeEventListener("touchstart", touchStart)
      window.removeEventListener("touchmove", touchMove)
    }
  }, [ref, handler1, handler2])
}