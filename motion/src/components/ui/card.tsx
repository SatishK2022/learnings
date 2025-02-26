"use client";

import {
  Icon24Hours,
  Icon360View,
  Icon3dCubeSphere,
  IconMessage,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function Card() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            className="text-zinc-900 w-96 min-h-[26rem] h-[31rem] rounded-xl shadow-md p-6 flex flex-col bg-white"
          >
            <h2 className="font-bold text-sm">Aceternity UI Component</h2>
            <p className="text-neutral-500 mt-2 text-xs">
              A collection of beautiful UI components, let's get on with it.
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 mt-4 shadow-md text-sm py-1 px-2 rounded-md"
              >
                <Image
                  width={50}
                  height={50}
                  alt="logo"
                  src="/logo.webp"
                  className="h-4 w-4"
                />{" "}
                Aceternity
                <IconX className="h-4 w-4 text-neutral-500" />
              </button>
            </div>
            <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
              {/* Motion Divs start here */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  // duration: 0.3,
                  // ease: "easeInOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200"
              >
                <div className="p-4 flex gap-3">
                  <div className="h-8 w-8 bg-white flex-shrink-0 shadow-md flex items-center justify-center rounded-md">
                    <IconMessage className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-xs mt-1">
                      A collection of UI components
                    </p>
                  </div>
                </div>

                <div className="p-4 flex gap-3">
                  <div className="h-8 w-8 bg-white flex-shrink-0 shadow-md flex items-center justify-center rounded-md">
                    <Icon24Hours className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-neutral-600">
                      24 hours turnaround
                    </p>
                    <p className="text-neutral-400 text-xs mt-1">
                      Super fast delivery at warp speed.
                    </p>
                  </div>
                </div>

                <div className="p-4 flex gap-3">
                  <div className="h-8 w-8 bg-white flex-shrink-0 shadow-md flex items-center justify-center rounded-md">
                    <Icon360View className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-neutral-600">
                      360 days all around
                    </p>
                    <p className="text-neutral-400 text-xs mt-1">
                      We are here to help you 24/7.
                    </p>
                  </div>
                </div>

                <div className="p-4 flex gap-3">
                  <div className="h-8 w-8 bg-white flex-shrink-0 shadow-md flex items-center justify-center rounded-md">
                    <Icon3dCubeSphere className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-neutral-600">
                      Some other feature
                    </p>
                    <p className="text-neutral-400 text-xs mt-1">
                      Here you can add some feature
                    </p>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-center gap-3">
                  <div className="h-8 w-8 bg-white flex-shrink-0 shadow-md flex items-center justify-center rounded-full">
                    <IconPlus className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">Create Project</p>
                  </div>
                </div>
              </motion.div>

              {/* Motion Divs end here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Card;
