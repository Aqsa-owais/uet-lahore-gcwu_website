"use client";

import { Button } from "@/components/ui/button";
import { FileText, LinkIcon } from "lucide-react";

export default function Assignments() {
  const assignments = [
    {
      id: 1,
      week: "Assignments",
      title: "Complete your Assignments",
      description: "Complete your Assignments.",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-12">
          Assignments
        </h1>

        <div className="space-y-6">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {assignment.week}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {assignment.title}
                  </h2>
                  <p className="text-foreground/70 mt-2">
                    {assignment.description}
                  </p>
                </div>
              </div>
              {/* first Assignments */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/document/d/1A3DdR-8NK1WpV_l8BRYFgf_fE46KDgmU8jYgMkwfyOo/edit?tab=t.0#heading=h.jm555u21o2rn",
                      "_blank",
                    )
                  }
                >
                  <FileText size={18} />
                  Assignment 1 Instructions
                </Button>
                <Button
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLScgaONfScEnOhkKtsVXi-GgtkbNMY8YGEhCRartW1vWN4FMGg/viewform",
                      "_blank",
                    )
                  }
                >
                  <LinkIcon size={18} />
                  Submit Assignment
                </Button>
              </div>
              {/* 2nd Assignments */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/document/d/1l2pYxwHC8N41TdpxBN0u0NR3nrY95aLlqTznIVIrTAs/edit?tab=t.0#heading=h.8lufd6y4aqe9",
                      "_blank",
                    )
                  }
                >
                  <FileText size={18} />
                  Assignment 2 Instructions
                </Button>
                <Button
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSeR01YUZq2dnHFyYXkDMz9FzTy1iG38x4YCLWWG-wgDWPxxtw/viewform",
                      "_blank",
                    )
                  }
                >
                  <LinkIcon size={18} />
                  Submit Assignment
                </Button>
              </div>
              {/* 3rd Assignments */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <FileText size={18} />
                  Hackathon Assignment will be Announce Soon
                </Button>
                {/* <Button
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSckn2t8SQQcHHEc0Y6Scy-d0JUMiVVNnP63hxPMiuWZ0myxlg/viewform",
                      "_blank"
                    )
                  }
                >
                  <LinkIcon size={18} />
                  Submit Assignment
                </Button> */}
              </div>
              {/* 4th Assignments */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <FileText size={18} />
                  Assignment 4 
                </Button>
                <Button
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSdKbxEPUxcFM8k9OEMAOGDCR7fYB6m3c5tXfU1OXrx2PsZO8A/viewform",
                      "_blank",
                    )
                  }
                >
                  <LinkIcon size={18} />
                  Submit Assignment
                </Button>
              </div>
              {/* 5th Assignments */}
              {/* <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/document/d/1wKKKKukcRy82ogtDYOh83HYmvXPESBdyGfzQBJ3tQuQ/edit?tab=t.0#heading=h.8o5jdfteqs1u",
                      "_blank"
                    )
                  }
                >
                  <FileText size={18} />
                  Assignment Instructions
                </Button>
                <Button
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSfJSh5eDSmzx1aMEfaNweG_kCka20i3DQMqYndmvzVWhFjOPQ/viewform",
                      "_blank"
                    )
                  }
                >
                  <LinkIcon size={18} />
                  Submit Assignment
                </Button>
              </div> */}
              {/* 6th Assignments */}
              {/* <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/document/d/1pkMC-F3sTA4kiwFwx2RbZ1myuIgRU5IkgzaB6GWaG9A/edit?tab=t.0#heading=h.olpw68ve72fd",
                      "_blank"
                    )
                  }
                >
                  <FileText size={18} />
                  Assignment Instructions
                </Button>
                <Button
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSdB3C5lRjDh8InISos24NoB8wNLZqhCwp0NEt1q2xG3eDuAvA/viewform",
                      "_blank"
                    )
                  }
                >
                  <LinkIcon size={18} />
                  Submit Assignment
                </Button>
              </div> */}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border">
          <p className="text-foreground/70 text-center">
            Remember to submit your assignments on time. Each assignment builds
            on the previous concepts learned in the sessions.
          </p>
        </div>
      </div>
    </div>
  );
}
