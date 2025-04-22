"use client";

import { useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { Button } from "@impact-canvas/ui";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { generateTheoryOfChange } from "@/lib/api";
import type { ProjectInput } from "@impact-canvas/types";

// Sample survey JSON - in a real implementation, this would be imported from @impact-canvas/config
const surveyJson = {
  title: "Impact Canvas",
  description: "Fill out this form to create your Theory of Change, Impact Activities, and Monitoring Plan.",
  pages: [
    {
      name: "page1",
      title: "Project Overview",
      elements: [
        {
          type: "text",
          name: "purpose",
          title: "Purpose",
          isRequired: true,
          placeholder: "What problem are you trying to solve?"
        },
        {
          type: "text",
          name: "vision",
          title: "Vision",
          isRequired: true,
          placeholder: "What is your vision for change?"
        },
        {
          type: "text",
          name: "mission",
          title: "Mission",
          isRequired: true,
          placeholder: "What is your organization's mission?"
        },
        {
          type: "text",
          name: "approach",
          title: "Approach",
          isRequired: true,
          placeholder: "How do you plan to address the problem?"
        }
      ]
    },
    {
      name: "page2",
      title: "Key Activities",
      elements: [
        {
          type: "text",
          name: "activity1",
          title: "Activity 1",
          isRequired: true,
          placeholder: "Describe a key activity"
        },
        {
          type: "text",
          name: "activity2",
          title: "Activity 2",
          placeholder: "Describe another key activity (optional)"
        },
        {
          type: "text",
          name: "activity3",
          title: "Activity 3",
          placeholder: "Describe another key activity (optional)"
        }
      ]
    },
    {
      name: "page3",
      title: "Resources",
      elements: [
        {
          type: "text",
          name: "humanResources",
          title: "Human Resources",
          placeholder: "What human resources do you have?"
        },
        {
          type: "text",
          name: "physicalResources",
          title: "Physical Resources",
          placeholder: "What physical resources do you have?"
        },
        {
          type: "text",
          name: "financialResources",
          title: "Financial Resources",
          placeholder: "What financial resources do you have?"
        },
        {
          type: "text",
          name: "partnerships",
          title: "Partnerships",
          placeholder: "What partnerships do you have?"
        }
      ]
    },
    {
      name: "page4",
      title: "Audience",
      elements: [
        {
          type: "text",
          name: "beneficiaries",
          title: "Beneficiaries",
          isRequired: true,
          placeholder: "Who will benefit from your project?"
        },
        {
          type: "text",
          name: "customers",
          title: "Customers",
          placeholder: "Who are your customers (if different from beneficiaries)?"
        }
      ]
    },
    {
      name: "page5",
      title: "Monitoring",
      elements: [
        {
          type: "text",
          name: "indicator1",
          title: "Indicator 1",
          isRequired: true,
          placeholder: "What indicator will you use to measure success?"
        },
        {
          type: "text",
          name: "indicator2",
          title: "Indicator 2",
          placeholder: "What is another indicator? (optional)"
        },
        {
          type: "text",
          name: "indicator3",
          title: "Indicator 3",
          placeholder: "What is another indicator? (optional)"
        }
      ]
    }
  ],
  showProgressBar: "top",
  progressBarType: "buttons",
  showNavigationButtons: true,
  showCompletedPage: false
};

export default function CreatePage() {
  const [survey] = useState(new Model(surveyJson));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleComplete = async (sender: any) => {
    const results = sender.data as ProjectInput;
    console.log("Form submitted:", results);
    
    setIsSubmitting(true);
    
    try {
      // Send data to the API and get results
      const response = await generateTheoryOfChange(results);
      
      if (response.success && response.data) {
        // In a real implementation, we would store the result data in a database
        // and redirect to the results page with the ID
        // For now, we'll just redirect to a sample result page
        router.push("/results?id=sample");
      } else {
        // Handle error
        console.error("API error:", response.error);
        alert("An error occurred: " + (response.error || "Unknown error"));
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred during submission. Please try again.");
      setIsSubmitting(false);
    }
  };

  // Set up the survey complete event
  survey.onComplete.add(handleComplete);

  return (
    <div className="w-full max-w-4xl">
      <div className="mb-8">
        <Link href="/">
          <Button variant="tertiary" size="small">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Button>
        </Link>
      </div>
      
      {isSubmitting ? (
        <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center min-h-80">
          <h2 className="text-2xl font-semibold mb-4">Generating your Impact Canvas...</h2>
          <p className="text-gray-600 mb-6">This may take a few moments as our AI analyzes your input.</p>
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <Survey model={survey} />
        </div>
      )}
    </div>
  );
} 