"use client";

import { Button } from "@impact-canvas/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-5xl w-full">
      <div className="flex flex-col items-center text-center gap-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Impact Canvas
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
          Simplify your impact planning. Make meaningful change.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16">
        <div className="flex flex-col gap-4 p-6 border rounded-lg bg-white shadow-sm">
          <h2 className="text-2xl font-semibold">Automated Theory of Change</h2>
          <p className="text-gray-600">
            Clearly articulate your project's purpose, vision, and intended outcomes
            with AI-powered assistance.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 p-6 border rounded-lg bg-white shadow-sm">
          <h2 className="text-2xl font-semibold">AI-suggested Impact Activities</h2>
          <p className="text-gray-600">
            Receive actionable, tailored activities directly aligned with your
            objectives and goals.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 p-6 border rounded-lg bg-white shadow-sm">
          <h2 className="text-2xl font-semibold">Custom Monitoring Plans</h2>
          <p className="text-gray-600">
            Easily track your project's success with practical indicators, clear
            methods, and recommended monitoring frequencies.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 p-6 border rounded-lg bg-white shadow-sm">
          <h2 className="text-2xl font-semibold">Seamless Integration</h2>
          <p className="text-gray-600">
            Built using modern web technologies, ensuring reliable performance and
            effortless integration into your workflow.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <h2 className="text-3xl font-semibold">Ready to transform your impact strategy?</h2>
        <Link href="/create">
          <Button size="large">
            Start your canvas <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
