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
    // {
    //   id: 2,
    //   week: 'Week 2',
    //   title: 'Create a GitHub Profile README',
    //   description: 'Create a GitHub Profile README.'
    // },
    // {
    //   id: 3,
    //   week: 'Week 3',
    //   title: 'Advanced JavaScript Concepts',
    //   description: 'Deep dive into ES6+, async programming, and modern JavaScript patterns.'
    // },
    // {
    //   id: 4,
    //   week: 'Week 4',
    //   title: 'Advanced JavaScript Concepts',
    //   description: 'Deep dive into ES6+, async programming, and modern JavaScript patterns.'
    // },
    // {
    //   id: 5,
    //   week: 'Week 5',
    //   title: 'Advanced JavaScript Concepts',
    //   description: 'Deep dive into ES6+, async programming, and modern JavaScript patterns.'
    // },
    // {
    //   id: 6,
    //   week: 'Week 6',
    //   title: 'Advanced JavaScript Concepts',
    //   description: 'Deep dive into ES6+, async programming, and modern JavaScript patterns.'
    // },
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

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/document/d/171rHSiRwF8KOq9L5p9Eoh8VByE5wW1qK5dmaM-FgMZs/edit?tab=t.0#heading=h.gj5xp1xdkdlc",
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
                      "https://docs.google.com/forms/d/e/1FAIpQLSePF7KBuC5j6Lo7yIm7gwNJFQHJnlGSsOj5cvELw5o3cfCC6g/viewform",
                      "_blank"
                    )
                  }
                >
                  <LinkIcon size={18} />
                  Submit Assignment
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/document/d/1W0hC4--NyelKcQaA_FK2zIXXkTcdU8Kkz3SqygCGBOk/edit?tab=t.0#heading=h.ai2xmkv29hwf",
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
                      "https://docs.google.com/forms/d/e/1FAIpQLSe4vA7b8CG0FhpO_8abqfZm5xPkTDb1LTEpAypG03GB37DMKg/viewform",
                      "_blank"
                    )
                  }
                >
                  <LinkIcon size={18} />
                  Submit Assignment
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/171rHSiRwF8KOq9L5p9Eoh8VByE5wW1qK5dmaM-FgMZs/edit?tab=t.0#heading=h.gj5xp1xdkdlc",
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
                "https://docs.google.com/forms/d/e/1FAIpQLSePF7KBuC5j6Lo7yIm7gwNJFQHJnlGSsOj5cvELw5o3cfCC6g/viewform",
                "_blank"
              )
            }
          >
            <LinkIcon size={18} />
            Submit Assignment
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1Hfx9uUtc9GOWv8E6IVtN2IfrGb-mOJv1_hzx_p5I9QA/edit?tab=t.0#heading=h.pkq66acuwkcq",
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
                "https://docs.google.com/forms/d/e/1FAIpQLSckn2t8SQQcHHEc0Y6Scy-d0JUMiVVNnP63hxPMiuWZ0myxlg/viewform",
                "_blank"
              )
            }
          >
            <LinkIcon size={18} />
            Submit Assignment
          </Button>
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
