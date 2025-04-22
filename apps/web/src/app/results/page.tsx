"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@impact-canvas/ui";
import { ArrowLeft, Download, Edit } from "lucide-react";
import type { TheoryOfChange, ImpactActivity, MonitoringPlan } from "@impact-canvas/types";

// Simulated sample data for demo purposes
// In a real implementation, this would be fetched from the backend
const sampleResult = {
  theoryOfChange: {
    purpose: "To address food insecurity in urban communities",
    vision: "A world where everyone has access to nutritious food",
    mission: "To create sustainable community gardens that provide fresh produce to urban neighborhoods",
    approach: "Developing community-led urban farming initiatives",
    activities: [
      "Establish community gardens in vacant lots",
      "Provide gardening training to community members", 
      "Create distribution systems for harvested produce"
    ],
    outputs: [
      "Increased access to fresh produce",
      "New urban gardening skills in the community",
      "Stronger community bonds through collaborative work"
    ],
    outcomes: [
      "Reduced food insecurity in the neighborhood",
      "Improved nutrition among community members",
      "Enhanced environment through green spaces"
    ],
    impact: "Transformed urban food systems with increased food sovereignty, improved health outcomes, and more resilient communities"
  },
  impactActivities: [
    {
      name: "Community Garden Establishment",
      description: "Convert vacant lots into productive community gardens through collaborative design and implementation.",
      resources: ["Land access", "Seeds and tools", "Volunteer labor", "Initial funding for infrastructure"],
      expectedOutcomes: ["Increased food production", "Improved community spaces", "New gardening skills development"]
    },
    {
      name: "Gardening Workshops",
      description: "Regular gardening workshops to teach sustainable urban farming techniques and nutritional education.",
      resources: ["Experienced gardeners", "Educational materials", "Meeting space", "Demonstration garden plots"],
      expectedOutcomes: ["Increased gardening knowledge", "More households growing food", "Improved food preparation skills"]
    },
    {
      name: "Harvest Distribution Network",
      description: "Create an equitable system for distributing harvested produce to community members, with priority to those in need.",
      resources: ["Storage facilities", "Transportation", "Volunteer coordinators", "Distribution site"],
      expectedOutcomes: ["Increased access to fresh produce", "Reduced food waste", "Stronger community networks"]
    }
  ],
  monitoringPlan: {
    indicators: [
      {
        name: "Garden Productivity",
        description: "Amount of food produced (in kg) from community gardens",
        method: "Regular weighing and recording of harvests",
        frequency: "Weekly during harvest season",
        target: "500kg per garden annually"
      },
      {
        name: "Community Participation",
        description: "Number of community members actively involved in garden activities",
        method: "Attendance tracking at garden events and work sessions",
        frequency: "Monthly",
        target: "50 regular participants per garden"
      },
      {
        name: "Food Distribution",
        description: "Number of households receiving produce from the gardens",
        method: "Distribution records and recipient surveys",
        frequency: "Every distribution event",
        target: "100 households receiving food regularly"
      }
    ]
  }
};

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const [resultData, setResultData] = useState<{
    theoryOfChange: TheoryOfChange;
    impactActivities: ImpactActivity[];
    monitoringPlan: MonitoringPlan;
  } | null>(null);
  
  // In a real implementation, we would fetch the data from an API
  // based on the ID from the search parameters
  useEffect(() => {
    // This simulates loading data from an API
    const id = searchParams.get("id");
    
    if (id) {
      // Simulate API call with a delay
      setTimeout(() => {
        setResultData(sampleResult);
      }, 500);
    }
  }, [searchParams]);

  if (!resultData) {
    return (
      <div className="w-full max-w-4xl flex justify-center items-center py-16">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Loading your results...</h2>
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="mb-8 flex justify-between">
        <Link href="/">
          <Button variant="tertiary" size="small">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Button>
        </Link>
        <div className="space-x-4">
          <Button variant="secondary" size="small">
            <Edit className="mr-2 h-4 w-4" /> Edit
          </Button>
          <Button variant="secondary" size="small">
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
        </div>
      </div>
      
      <div className="p-8 bg-white rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Impact Canvas</h1>
        
        {/* Theory of Change Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Theory of Change</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700">Purpose</h3>
              <p>{resultData.theoryOfChange.purpose}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-700">Vision</h3>
              <p>{resultData.theoryOfChange.vision}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-700">Mission</h3>
              <p>{resultData.theoryOfChange.mission}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-700">Approach</h3>
              <p>{resultData.theoryOfChange.approach}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-700">Activities</h3>
              <ul className="list-disc pl-5">
                {resultData.theoryOfChange.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-700">Outputs</h3>
              <ul className="list-disc pl-5">
                {resultData.theoryOfChange.outputs.map((output, index) => (
                  <li key={index}>{output}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-700">Outcomes</h3>
              <ul className="list-disc pl-5">
                {resultData.theoryOfChange.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-700">Impact</h3>
              <p>{resultData.theoryOfChange.impact}</p>
            </div>
          </div>
        </section>
        
        {/* Impact Activities Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Impact Activities</h2>
          
          <div className="space-y-6">
            {resultData.impactActivities.map((activity, index) => (
              <div key={index} className="p-4 border rounded-md">
                <h3 className="text-xl font-medium">{activity.name}</h3>
                <p className="mb-2">{activity.description}</p>
                
                <div className="mt-3">
                  <h4 className="text-sm font-medium text-gray-700">Resources Needed:</h4>
                  <ul className="list-disc pl-5">
                    {activity.resources.map((resource, i) => (
                      <li key={i}>{resource}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-3">
                  <h4 className="text-sm font-medium text-gray-700">Expected Outcomes:</h4>
                  <ul className="list-disc pl-5">
                    {activity.expectedOutcomes.map((outcome, i) => (
                      <li key={i}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Monitoring Plan Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Monitoring Plan</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Indicator</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {resultData.monitoringPlan.indicators.map((indicator, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{indicator.name}</td>
                    <td className="px-6 py-4 text-sm">{indicator.description}</td>
                    <td className="px-6 py-4 text-sm">{indicator.method}</td>
                    <td className="px-6 py-4 text-sm">{indicator.frequency}</td>
                    <td className="px-6 py-4 text-sm">{indicator.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
} 