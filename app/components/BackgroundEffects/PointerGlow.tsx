"use client";





const PointerGlow = () => {
  
    if (typeof document !== "undefined") {
        const blob = document.getElementById("blob");

        window.onpointermove = (event: any) => {
            const { clientX, clientY } = event;

            if (blob != null) {
                blob.animate(
                    {
                        left: `${clientX}px`,
                        top: `${clientY}px`,
                    },
                    { duration: 3000, fill: "forwards" }
                );
            }
        };
    }
    return (
        <>
            <div
                id={"blob"}
                className="bg-white h-[32vmax] aspect-square absolute inset-0 -translate-x-1/2 -translate-y-1/2 z-0
          rounded-3xl bg-gradient-to-r from-orange-500 to-purple-500 animate-rotating-light"
            />

            <div
                id="blur"
                className={`h-full w-full absolute z-10 backdrop-blur-[12vmax]`}
            />
        </>
    );
}
export default PointerGlow;