"use client"

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';

export default function MCPModelContextProtocolGuide() {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const content = {
    en: {
      backToList: "\u2190 Back to Blog",
      date: "December 14, 2025",
      readTime: "7 min read",
      title: "MCP: The Protocol That Connects AI to Your Business Systems",
      sections: {
        intro: {
          title: "What is MCP?",
          content: "Model Context Protocol (MCP) is an open standard developed by Anthropic that allows AI models to securely connect to external data sources, tools, and systems. Think of it as a universal adapter that lets AI assistants like Claude access your databases, APIs, file systems, and business applications\u2014turning them from isolated chatbots into integrated business tools."
        },
        whyMatters: {
          title: "Why MCP Matters for Your Business",
          content: "Before MCP, integrating AI into business workflows required custom code for every connection. Want Claude to query your database? Write custom integration code. Want it to access your CRM? More custom code. MCP changes this by providing a standardized way for AI to interact with any system.",
          benefits: [
            "One integration pattern for all your systems",
            "Secure, controlled access to sensitive data",
            "Real-time information instead of outdated training data",
            "AI that understands your specific business context"
          ]
        },
        howWorks: {
          title: "How MCP Works",
          content: "MCP follows a client-server architecture. The AI model (client) connects to MCP servers that expose specific capabilities. Each server can provide:",
          capabilities: [
            {
              title: "Resources",
              description: "Data that AI can read\u2014documents, database records, API responses, file contents"
            },
            {
              title: "Tools",
              description: "Actions the AI can perform\u2014run queries, send emails, create records, trigger workflows"
            },
            {
              title: "Prompts",
              description: "Pre-defined templates for common tasks\u2014ensuring consistent, high-quality AI interactions"
            }
          ]
        },
        useCases: {
          title: "5 Powerful MCP Use Cases",
          cases: [
            {
              title: "1. Database Intelligence",
              content: "Connect AI directly to your PostgreSQL, MySQL, or MongoDB databases. Ask questions in natural language like 'Show me all orders from last month over $1000' and get instant results\u2014no SQL knowledge required.",
              example: "Example: A sales manager asks Claude about customer trends, and it queries the live database to provide real-time insights."
            },
            {
              title: "2. Document & Knowledge Management",
              content: "Give AI access to your internal documents, wikis, and knowledge bases. It can search, summarize, and answer questions based on your actual company information.",
              example: "Example: New employees ask questions about company policies, and AI answers using your actual HR documentation."
            },
            {
              title: "3. Development Workflow Integration",
              content: "Connect to GitHub, Jira, or your CI/CD pipeline. AI can review code, create issues, check deployment status, and help manage your entire development process.",
              example: "Example: 'Create a bug ticket for the login issue we discussed' \u2014 AI creates it in Jira with full context."
            },
            {
              title: "4. CRM & Sales Automation",
              content: "Integrate with Salesforce, HubSpot, or your custom CRM. AI can update records, schedule follow-ups, and provide insights on customer relationships.",
              example: "Example: After a sales call, tell AI about the conversation and it updates the CRM, creates tasks, and drafts follow-up emails."
            },
            {
              title: "5. Custom Business Logic",
              content: "Build MCP servers that expose your specific business operations. AI becomes an interface to your entire tech stack.",
              example: "Example: 'Process the refund for order #12345' \u2014 AI triggers your refund workflow, updates inventory, and notifies the customer."
            }
          ]
        },
        implementation: {
          title: "Implementing MCP in Your Stack",
          steps: [
            {
              title: "Choose Your MCP Servers",
              content: "Start with pre-built servers for common integrations (PostgreSQL, GitHub, Slack, Google Drive) or build custom servers for your specific needs."
            },
            {
              title: "Define Access Controls",
              content: "MCP supports fine-grained permissions. Decide what data AI can read, what actions it can perform, and implement proper authentication."
            },
            {
              title: "Build Context-Aware Prompts",
              content: "Design prompts that leverage your connected systems. The more context AI has, the more valuable its responses become."
            },
            {
              title: "Monitor and Iterate",
              content: "Track how AI uses your MCP connections. Refine permissions, add new capabilities, and optimize based on actual usage patterns."
            }
          ]
        },
        security: {
          title: "Security Considerations",
          items: [
            { bold: "Principle of Least Privilege", text: "Only expose the minimum data and actions needed. Don't give AI admin access when read-only suffices." },
            { bold: "Audit Logging", text: "Log all MCP interactions. Know what data AI accessed and what actions it performed." },
            { bold: "Data Sanitization", text: "Be careful with sensitive data. Implement filters to prevent exposure of credentials, PII, or proprietary information." },
            { bold: "Human Approval Flows", text: "For critical actions (payments, deletions, external communications), require human confirmation before execution." }
          ]
        },
        techStack: {
          title: "Building Custom MCP Servers",
          content: "MCP servers can be built in any language. The official SDKs support Python and TypeScript, making it easy to wrap your existing APIs and services.",
          code: "A basic MCP server exposes tools that AI can call. For example, a customer lookup tool might accept a customer ID and return their full profile from your database\u2014all through a clean, standardized interface."
        },
        cta: {
          title: "Ready to Connect AI to Your Systems?",
          content: "I build custom MCP integrations that connect AI to your specific business systems\u2014databases, APIs, internal tools, and workflows. Whether you need a simple database connection or a complete AI-powered business automation platform, let's discuss how MCP can transform your operations.",
          button: "Discuss MCP integration"
        }
      }
    },
    he: {
      backToList: "\u2192 \u05D7\u05D6\u05E8\u05D4 \u05DC\u05D1\u05DC\u05D5\u05D2",
      date: "14 \u05D1\u05D3\u05E6\u05DE\u05D1\u05E8 2025",
      readTime: "7 \u05D3\u05E7\u05D5\u05EA \u05E7\u05E8\u05D9\u05D0\u05D4",
      title: "MCP: \u05D4\u05E4\u05E8\u05D5\u05D8\u05D5\u05E7\u05D5\u05DC \u05E9\u05DE\u05D7\u05D1\u05E8 AI \u05DC\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05E2\u05E1\u05E7\u05D9\u05D5\u05EA \u05E9\u05DC\u05DA",
      sections: {
        intro: {
          title: "\u05DE\u05D4 \u05D6\u05D4 MCP?",
          content: "Model Context Protocol (MCP) הוא תקן פתוח שפותח על ידי Anthropic שמאפשר למודלי AI להתחבר באופן מאובטח למקורות נתונים חיצוניים, כלים ומערכות. חשבו על זה כמתאם אוניברסלי שמאפשר לעוזרי AI כמו Claude לגשת למסדי הנתונים, ה-APIs, מערכות הקבצים והאפליקציות העסקיות שלכם—והופך אותם מצאטבוטים מבודדים לכלים עסקיים משולבים."
        },
        whyMatters: {
          title: "\u05DC\u05DE\u05D4 MCP \u05D7\u05E9\u05D5\u05D1 \u05DC\u05E2\u05E1\u05E7 \u05E9\u05DC\u05DA",
          content: "\u05DC\u05E4\u05E0\u05D9 MCP, \u05E9\u05D9\u05DC\u05D5\u05D1 AI \u05D1\u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4 \u05E2\u05E1\u05E7\u05D9\u05D9\u05DD \u05D3\u05E8\u05E9 \u05E7\u05D5\u05D3 \u05DE\u05D5\u05EA\u05D0\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA \u05DC\u05DB\u05DC \u05D7\u05D9\u05D1\u05D5\u05E8. \u05E8\u05D5\u05E6\u05D9\u05DD \u05E9-Claude \u05D9\u05E9\u05D0\u05DC \u05D0\u05EA \u05DE\u05E1\u05D3 \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD? \u05DB\u05EA\u05D1\u05D5 \u05E7\u05D5\u05D3 \u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4. \u05E8\u05D5\u05E6\u05D9\u05DD \u05E9\u05D9\u05D2\u05E9 \u05DC-CRM? \u05E2\u05D5\u05D3 \u05E7\u05D5\u05D3. MCP \u05DE\u05E9\u05E0\u05D4 \u05D0\u05EA \u05D6\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D0\u05E1\u05E4\u05E7\u05EA \u05D3\u05E8\u05DA \u05E1\u05D8\u05E0\u05D3\u05E8\u05D8\u05D9\u05EA \u05DC-AI \u05DC\u05EA\u05E7\u05E9\u05E8 \u05E2\u05DD \u05DB\u05DC \u05DE\u05E2\u05E8\u05DB\u05EA.",
          benefits: [
            "\u05EA\u05D1\u05E0\u05D9\u05EA \u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4 \u05D0\u05D7\u05EA \u05DC\u05DB\u05DC \u05D4\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05E9\u05DC\u05DB\u05DD",
            "\u05D2\u05D9\u05E9\u05D4 \u05DE\u05D0\u05D5\u05D1\u05D8\u05D7\u05EA \u05D5\u05DE\u05D1\u05D5\u05E7\u05E8\u05EA \u05DC\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E8\u05D2\u05D9\u05E9\u05D9\u05DD",
            "\u05DE\u05D9\u05D3\u05E2 \u05D1\u05D6\u05DE\u05DF \u05D0\u05DE\u05EA \u05D1\u05DE\u05E7\u05D5\u05DD \u05E0\u05EA\u05D5\u05E0\u05D9 \u05D0\u05D9\u05DE\u05D5\u05DF \u05DE\u05D9\u05D5\u05E9\u05E0\u05D9\u05DD",
            "AI \u05E9\u05DE\u05D1\u05D9\u05DF \u05D0\u05EA \u05D4\u05D4\u05E7\u05E9\u05E8 \u05D4\u05E2\u05E1\u05E7\u05D9 \u05D4\u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05E9\u05DC\u05DB\u05DD"
          ]
        },
        howWorks: {
          title: "\u05D0\u05D9\u05DA MCP \u05E2\u05D5\u05D1\u05D3",
          content: "MCP \u05E2\u05D5\u05E7\u05D1 \u05D0\u05D7\u05E8\u05D9 \u05D0\u05E8\u05DB\u05D9\u05D8\u05E7\u05D8\u05D5\u05E8\u05EA \u05DC\u05E7\u05D5\u05D7-\u05E9\u05E8\u05EA. \u05DE\u05D5\u05D3\u05DC \u05D4-AI (\u05DC\u05E7\u05D5\u05D7) \u05DE\u05EA\u05D7\u05D1\u05E8 \u05DC\u05E9\u05E8\u05EA\u05D9 MCP \u05E9\u05D7\u05D5\u05E9\u05E4\u05D9\u05DD \u05D9\u05DB\u05D5\u05DC\u05D5\u05EA \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9\u05D5\u05EA. \u05DB\u05DC \u05E9\u05E8\u05EA \u05D9\u05DB\u05D5\u05DC \u05DC\u05E1\u05E4\u05E7:",
          capabilities: [
            {
              title: "\u05DE\u05E9\u05D0\u05D1\u05D9\u05DD (Resources)",
              description: "\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E9-AI \u05D9\u05DB\u05D5\u05DC \u05DC\u05E7\u05E8\u05D5\u05D0\u2014\u05DE\u05E1\u05DE\u05DB\u05D9\u05DD, \u05E8\u05E9\u05D5\u05DE\u05D5\u05EA \u05DE\u05DE\u05E1\u05D3 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD, \u05EA\u05E9\u05D5\u05D1\u05D5\u05EA API, \u05EA\u05DB\u05E0\u05D9 \u05E7\u05D1\u05E6\u05D9\u05DD"
            },
            {
              title: "\u05DB\u05DC\u05D9\u05DD (Tools)",
              description: "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05E9-AI \u05D9\u05DB\u05D5\u05DC \u05DC\u05D1\u05E6\u05E2\u2014\u05D4\u05E8\u05E6\u05EA \u05E9\u05D0\u05D9\u05DC\u05EA\u05D5\u05EA, \u05E9\u05DC\u05D9\u05D7\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC\u05D9\u05DD, \u05D9\u05E6\u05D9\u05E8\u05EA \u05E8\u05E9\u05D5\u05DE\u05D5\u05EA, \u05D4\u05E4\u05E2\u05DC\u05EA \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9\u05DD"
            },
            {
              title: "\u05EA\u05D1\u05E0\u05D9\u05D5\u05EA (Prompts)",
              description: "\u05EA\u05D1\u05E0\u05D9\u05D5\u05EA \u05DE\u05D5\u05D2\u05D3\u05E8\u05D5\u05EA \u05DE\u05E8\u05D0\u05E9 \u05DC\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA\u2014\u05DC\u05D4\u05D1\u05D8\u05D7\u05EA \u05D0\u05D9\u05E0\u05D8\u05E8\u05D0\u05E7\u05E6\u05D9\u05D5\u05EA AI \u05E2\u05E7\u05D1\u05D9\u05D5\u05EA \u05D5\u05D0\u05D9\u05DB\u05D5\u05EA\u05D9\u05D5\u05EA"
            }
          ]
        },
        useCases: {
          title: "5 \u05DE\u05E7\u05E8\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD \u05D1-MCP",
          cases: [
            {
              title: "1. \u05D0\u05D9\u05E0\u05D8\u05DC\u05D9\u05D2\u05E0\u05E6\u05D9\u05D9\u05EA \u05DE\u05E1\u05D3\u05D9 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD",
              content: "\u05D7\u05D1\u05E8\u05D5 AI \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DE\u05E1\u05D3\u05D9 \u05D4-PostgreSQL, MySQL \u05D0\u05D5 MongoDB \u05E9\u05DC\u05DB\u05DD. \u05E9\u05D0\u05DC\u05D5 \u05E9\u05D0\u05DC\u05D5\u05EA \u05D1\u05E9\u05E4\u05D4 \u05D8\u05D1\u05E2\u05D9\u05EA \u05DB\u05DE\u05D5 '\u05D4\u05E8\u05D0\u05D4 \u05DC\u05D9 \u05D0\u05EA \u05DB\u05DC \u05D4\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05DE\u05D4\u05D7\u05D5\u05D3\u05E9 \u05D4\u05D0\u05D7\u05E8\u05D5\u05DF \u05DE\u05E2\u05DC 1000 \u05E9\u05E7\u05DC' \u05D5\u05E7\u05D1\u05DC\u05D5 \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05DE\u05D9\u05D9\u05D3\u05D9\u05D5\u05EA\u2014\u05D1\u05DC\u05D9 \u05E6\u05D5\u05E8\u05DA \u05D1\u05D9\u05D3\u05E2 \u05D1-SQL.",
              example: "\u05D3\u05D5\u05D2\u05DE\u05D4: \u05DE\u05E0\u05D4\u05DC \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA \u05E9\u05D5\u05D0\u05DC \u05D0\u05EA Claude \u05E2\u05DC \u05DE\u05D2\u05DE\u05D5\u05EA \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA, \u05D5\u05D4\u05D5\u05D0 \u05E9\u05D5\u05D0\u05DC \u05D0\u05EA \u05DE\u05E1\u05D3 \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D4\u05D7\u05D9 \u05DB\u05D3\u05D9 \u05DC\u05E1\u05E4\u05E7 \u05EA\u05D5\u05D1\u05E0\u05D5\u05EA \u05D1\u05D6\u05DE\u05DF \u05D0\u05DE\u05EA."
            },
            {
              title: "2. \u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05E1\u05DE\u05DB\u05D9\u05DD \u05D5\u05D9\u05D3\u05E2",
              content: "\u05EA\u05E0\u05D5 \u05DC-AI \u05D2\u05D9\u05E9\u05D4 \u05DC\u05DE\u05E1\u05DE\u05DB\u05D9\u05DD \u05D4\u05E4\u05E0\u05D9\u05DE\u05D9\u05D9\u05DD, \u05D5\u05D9\u05E7\u05D9\u05D5\u05EA \u05D5\u05D1\u05E1\u05D9\u05E1\u05D9 \u05D9\u05D3\u05E2 \u05E9\u05DC\u05DB\u05DD. \u05D4\u05D5\u05D0 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D7\u05E4\u05E9, \u05DC\u05E1\u05DB\u05DD \u05D5\u05DC\u05E2\u05E0\u05D5\u05EA \u05E2\u05DC \u05E9\u05D0\u05DC\u05D5\u05EA \u05E2\u05DC \u05D1\u05E1\u05D9\u05E1 \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05D0\u05DE\u05D9\u05EA\u05D9 \u05E9\u05DC \u05D4\u05D7\u05D1\u05E8\u05D4.",
              example: "\u05D3\u05D5\u05D2\u05DE\u05D4: \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD \u05E9\u05D5\u05D0\u05DC\u05D9\u05DD \u05E9\u05D0\u05DC\u05D5\u05EA \u05E2\u05DC \u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05D4, \u05D5-AI \u05E2\u05D5\u05E0\u05D4 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05EA\u05D9\u05E2\u05D5\u05D3 \u05DE\u05E9\u05D0\u05D1\u05D9 \u05D0\u05E0\u05D5\u05E9 \u05D0\u05DE\u05D9\u05EA\u05D9\u05D9\u05DD."
            },
            {
              title: "3. \u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4 \u05DC\u05EA\u05D4\u05DC\u05D9\u05DA \u05E4\u05D9\u05EA\u05D5\u05D7",
              content: "\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5 \u05DC-GitHub, Jira \u05D0\u05D5 \u05DC-CI/CD pipeline \u05E9\u05DC\u05DB\u05DD. AI \u05D9\u05DB\u05D5\u05DC \u05DC\u05E1\u05E7\u05D5\u05E8 \u05E7\u05D5\u05D3, \u05DC\u05D9\u05E6\u05D5\u05E8 issues, \u05DC\u05D1\u05D3\u05D5\u05E7 \u05E1\u05D8\u05D8\u05D5\u05E1 deployment \u05D5\u05DC\u05E2\u05D6\u05D5\u05E8 \u05DC\u05E0\u05D4\u05DC \u05D0\u05EA \u05DB\u05DC \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05E4\u05D9\u05EA\u05D5\u05D7.",
              example: "\u05D3\u05D5\u05D2\u05DE\u05D4: '\u05E6\u05D5\u05E8 \u05D8\u05D9\u05E7\u05D8 \u05D1\u05D0\u05D2 \u05DC\u05D1\u05E2\u05D9\u05D9\u05EA \u05D4\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA \u05E9\u05D3\u05D9\u05D1\u05E8\u05E0\u05D5 \u05E2\u05DC\u05D9\u05D4' \u2014 AI \u05D9\u05D5\u05E6\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D1-Jira \u05E2\u05DD \u05D4\u05E7\u05E9\u05E8 \u05DE\u05DC\u05D0."
            },
            {
              title: "4. CRM \u05D5\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D9\u05EA \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA",
              content: "\u05D4\u05E9\u05EA\u05DC\u05D1\u05D5 \u05E2\u05DD Salesforce, HubSpot \u05D0\u05D5 \u05D4-CRM \u05D4\u05DE\u05D5\u05EA\u05D0\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA \u05E9\u05DC\u05DB\u05DD. AI \u05D9\u05DB\u05D5\u05DC \u05DC\u05E2\u05D3\u05DB\u05DF \u05E8\u05E9\u05D5\u05DE\u05D5\u05EA, \u05DC\u05EA\u05D6\u05DE\u05DF \u05DE\u05E2\u05E7\u05D1\u05D9\u05DD \u05D5\u05DC\u05E1\u05E4\u05E7 \u05EA\u05D5\u05D1\u05E0\u05D5\u05EA \u05E2\u05DC \u05E7\u05E9\u05E8\u05D9 \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA.",
              example: "\u05D3\u05D5\u05D2\u05DE\u05D4: \u05D0\u05D7\u05E8\u05D9 \u05E9\u05D9\u05D7\u05EA \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA, \u05E1\u05E4\u05E8\u05D5 \u05DC-AI \u05E2\u05DC \u05D4\u05E9\u05D9\u05D7\u05D4 \u05D5\u05D4\u05D5\u05D0 \u05DE\u05E2\u05D3\u05DB\u05DF \u05D0\u05EA \u05D4-CRM, \u05D9\u05D5\u05E6\u05E8 \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05D5\u05DE\u05E0\u05E1\u05D7 \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC\u05D9 \u05DE\u05E2\u05E7\u05D1."
            },
            {
              title: "5. \u05DC\u05D5\u05D2\u05D9\u05E7\u05D4 \u05E2\u05E1\u05E7\u05D9\u05EA \u05DE\u05D5\u05EA\u05D0\u05DE\u05EA \u05D0\u05D9\u05E9\u05D9\u05EA",
              content: "\u05D1\u05E0\u05D5 \u05E9\u05E8\u05EA\u05D9 MCP \u05E9\u05D7\u05D5\u05E9\u05E4\u05D9\u05DD \u05D0\u05EA \u05D4\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D4\u05E2\u05E1\u05E7\u05D9\u05D5\u05EA \u05D4\u05E1\u05E4\u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05E9\u05DC\u05DB\u05DD. AI \u05D4\u05D5\u05E4\u05DA \u05DC\u05DE\u05DE\u05E9\u05E7 \u05DC\u05DB\u05DC \u05DE\u05E2\u05E8\u05DA \u05D4\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9 \u05E9\u05DC\u05DB\u05DD.",
              example: "\u05D3\u05D5\u05D2\u05DE\u05D4: '\u05E2\u05D1\u05D3 \u05D0\u05EA \u05D4\u05D4\u05D7\u05D6\u05E8 \u05DC\u05D4\u05D6\u05DE\u05E0\u05D4 #12345' \u2014 AI \u05DE\u05E4\u05E2\u05D9\u05DC \u05D0\u05EA \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D4\u05D7\u05D6\u05E8, \u05DE\u05E2\u05D3\u05DB\u05DF \u05DE\u05DC\u05D0\u05D9 \u05D5\u05DE\u05D5\u05D3\u05D9\u05E2 \u05DC\u05DC\u05E7\u05D5\u05D7."
            }
          ]
        },
        implementation: {
          title: "\u05D9\u05D9\u05E9\u05D5\u05DD MCP \u05D1\u05DE\u05E2\u05E8\u05DA \u05E9\u05DC\u05DB\u05DD",
          steps: [
            {
              title: "\u05D1\u05D7\u05E8\u05D5 \u05D0\u05EA \u05E9\u05E8\u05EA\u05D9 \u05D4-MCP",
              content: "\u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05E2\u05DD \u05E9\u05E8\u05EA\u05D9\u05DD \u05DE\u05D5\u05DB\u05E0\u05D9\u05DD \u05DC\u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA (PostgreSQL, GitHub, Slack, Google Drive) \u05D0\u05D5 \u05D1\u05E0\u05D5 \u05E9\u05E8\u05EA\u05D9\u05DD \u05DE\u05D5\u05EA\u05D0\u05DE\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA \u05DC\u05E6\u05E8\u05DB\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD."
            },
            {
              title: "\u05D4\u05D2\u05D3\u05D9\u05E8\u05D5 \u05D1\u05E7\u05E8\u05D5\u05EA \u05D2\u05D9\u05E9\u05D4",
              content: "MCP \u05EA\u05D5\u05DE\u05DA \u05D1\u05D4\u05E8\u05E9\u05D0\u05D5\u05EA \u05DE\u05E4\u05D5\u05E8\u05D8\u05D5\u05EA. \u05D4\u05D7\u05DC\u05D9\u05D8\u05D5 \u05D0\u05D9\u05D6\u05D4 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD AI \u05D9\u05DB\u05D5\u05DC \u05DC\u05E7\u05E8\u05D5\u05D0, \u05D0\u05D9\u05DC\u05D5 \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D4\u05D5\u05D0 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D1\u05E6\u05E2, \u05D5\u05D9\u05D9\u05E9\u05DE\u05D5 \u05D0\u05D9\u05DE\u05D5\u05EA \u05E0\u05DB\u05D5\u05DF."
            },
            {
              title: "\u05D1\u05E0\u05D5 prompts \u05DE\u05D5\u05D3\u05E2\u05D9 \u05D4\u05E7\u05E9\u05E8",
              content: "\u05EA\u05DB\u05E0\u05E0\u05D5 prompts \u05E9\u05DE\u05E0\u05E6\u05DC\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05DE\u05D7\u05D5\u05D1\u05E8\u05D5\u05EA. \u05DB\u05DB\u05DC \u05E9\u05D9\u05E9 \u05DC-AI \u05D9\u05D5\u05EA\u05E8 \u05D4\u05E7\u05E9\u05E8, \u05DB\u05DA \u05D4\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA \u05E9\u05DC\u05D5 \u05E0\u05E2\u05E9\u05D5\u05EA \u05D9\u05D5\u05EA\u05E8 \u05D9\u05E7\u05E8\u05D5\u05EA \u05E2\u05E8\u05DA."
            },
            {
              title: "\u05E0\u05D8\u05E8\u05D5 \u05D5\u05E9\u05E4\u05E8\u05D5",
              content: "\u05E2\u05E7\u05D1\u05D5 \u05D0\u05D7\u05E8\u05D9 \u05D0\u05D9\u05DA AI \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D7\u05D9\u05D1\u05D5\u05E8\u05D9 \u05D4-MCP. \u05E9\u05E4\u05E8\u05D5 \u05D4\u05E8\u05E9\u05D0\u05D5\u05EA, \u05D4\u05D5\u05E1\u05D9\u05E4\u05D5 \u05D9\u05DB\u05D5\u05DC\u05D5\u05EA \u05D7\u05D3\u05E9\u05D5\u05EA, \u05D5\u05D0\u05D5\u05E4\u05D8\u05DE\u05D5 \u05DC\u05E4\u05D9 \u05D3\u05E4\u05D5\u05E1\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D0\u05DE\u05D9\u05EA\u05D9\u05D9\u05DD."
            }
          ]
        },
        security: {
          title: "\u05E9\u05D9\u05E7\u05D5\u05DC\u05D9 \u05D0\u05D1\u05D8\u05D7\u05D4",
          items: [
            { bold: "\u05E2\u05E7\u05E8\u05D5\u05DF \u05D4\u05D4\u05E8\u05E9\u05D0\u05D4 \u05D4\u05DE\u05D9\u05E0\u05D9\u05DE\u05DC\u05D9\u05EA", text: "\u05D7\u05E9\u05E4\u05D5 \u05E8\u05E7 \u05D0\u05EA \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D5\u05D4\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D4\u05DE\u05D9\u05E0\u05D9\u05DE\u05DC\u05D9\u05D9\u05DD \u05D4\u05E0\u05D3\u05E8\u05E9\u05D9\u05DD. \u05D0\u05DC \u05EA\u05EA\u05E0\u05D5 \u05DC-AI \u05D2\u05D9\u05E9\u05EA \u05D0\u05D3\u05DE\u05D9\u05DF \u05DB\u05E9\u05E7\u05E8\u05D9\u05D0\u05D4 \u05D1\u05DC\u05D1\u05D3 \u05DE\u05E1\u05E4\u05D9\u05E7\u05D4." },
            { bold: "\u05EA\u05D9\u05E2\u05D5\u05D3 \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA", text: "\u05EA\u05E2\u05D3\u05D5 \u05D0\u05EA \u05DB\u05DC \u05D4\u05D0\u05D9\u05E0\u05D8\u05E8\u05D0\u05E7\u05E6\u05D9\u05D5\u05EA \u05E9\u05DC MCP. \u05D3\u05E2\u05D5 \u05DC\u05D0\u05D9\u05D6\u05D4 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD AI \u05E0\u05D9\u05D2\u05E9 \u05D5\u05D0\u05D9\u05DC\u05D5 \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D1\u05D9\u05E6\u05E2." },
            { bold: "\u05E0\u05D9\u05E7\u05D5\u05D9 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD", text: "\u05D4\u05D9\u05D6\u05D4\u05E8\u05D5 \u05E2\u05DD \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E8\u05D2\u05D9\u05E9\u05D9\u05DD. \u05D9\u05D9\u05E9\u05DE\u05D5 \u05DE\u05E1\u05E0\u05E0\u05D9\u05DD \u05DC\u05DE\u05E0\u05D5\u05E2 \u05D7\u05E9\u05D9\u05E4\u05EA \u05E1\u05D9\u05E1\u05DE\u05D0\u05D5\u05EA, PII \u05D0\u05D5 \u05DE\u05D9\u05D3\u05E2 \u05E7\u05E0\u05D9\u05D9\u05E0\u05D9." },
            { bold: "\u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05D0\u05D9\u05E9\u05D5\u05E8 \u05D0\u05E0\u05D5\u05E9\u05D9", text: "\u05DC\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05E7\u05E8\u05D9\u05D8\u05D9\u05D5\u05EA (\u05EA\u05E9\u05DC\u05D5\u05DE\u05D9\u05DD, \u05DE\u05D7\u05D9\u05E7\u05D5\u05EA, \u05EA\u05E7\u05E9\u05D5\u05E8\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05EA), \u05D3\u05E8\u05E9\u05D5 \u05D0\u05D9\u05E9\u05D5\u05E8 \u05D0\u05E0\u05D5\u05E9\u05D9 \u05DC\u05E4\u05E0\u05D9 \u05D1\u05D9\u05E6\u05D5\u05E2." }
          ]
        },
        techStack: {
          title: "\u05D1\u05E0\u05D9\u05D9\u05EA \u05E9\u05E8\u05EA\u05D9 MCP \u05DE\u05D5\u05EA\u05D0\u05DE\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA",
          content: "\u05E9\u05E8\u05EA\u05D9 MCP \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05D4\u05D9\u05D1\u05E0\u05D5\u05EA \u05D1\u05DB\u05DC \u05E9\u05E4\u05D4. \u05D4-SDKs \u05D4\u05E8\u05E9\u05DE\u05D9\u05D9\u05DD \u05EA\u05D5\u05DE\u05DB\u05D9\u05DD \u05D1-Python \u05D5-TypeScript, \u05DE\u05D4 \u05E9\u05DE\u05E7\u05DC \u05DC\u05E2\u05D8\u05D5\u05E3 \u05D0\u05EA \u05D4-APIs \u05D5\u05D4\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD \u05D4\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD.",
          code: "\u05E9\u05E8\u05EA MCP \u05D1\u05E1\u05D9\u05E1\u05D9 \u05D7\u05D5\u05E9\u05E3 \u05DB\u05DC\u05D9\u05DD \u05E9-AI \u05D9\u05DB\u05D5\u05DC \u05DC\u05E7\u05E8\u05D5\u05D0 \u05DC\u05D4\u05DD. \u05DC\u05DE\u05E9\u05DC, \u05DB\u05DC\u05D9 \u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05E7\u05D5\u05D7 \u05E2\u05E9\u05D5\u05D9 \u05DC\u05E7\u05D1\u05DC \u05DE\u05D6\u05D4\u05D4 \u05DC\u05E7\u05D5\u05D7 \u05D5\u05DC\u05D4\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05E4\u05E8\u05D5\u05E4\u05D9\u05DC \u05D4\u05DE\u05DC\u05D0 \u05DE\u05DE\u05E1\u05D3 \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD\u2014\u05D4\u05DB\u05DC \u05D3\u05E8\u05DA \u05DE\u05DE\u05E9\u05E7 \u05E0\u05E7\u05D9 \u05D5\u05E1\u05D8\u05E0\u05D3\u05E8\u05D8\u05D9."
        },
        cta: {
          title: "\u05DE\u05D5\u05DB\u05E0\u05D9\u05DD \u05DC\u05D7\u05D1\u05E8 AI \u05DC\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05E9\u05DC\u05DB\u05DD?",
          content: "\u05D0\u05E0\u05D9 \u05D1\u05D5\u05E0\u05D4 \u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D5\u05EA MCP \u05DE\u05D5\u05EA\u05D0\u05DE\u05D5\u05EA \u05D0\u05D9\u05E9\u05D9\u05EA \u05E9\u05DE\u05D7\u05D1\u05E8\u05D5\u05EA AI \u05DC\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05E2\u05E1\u05E7\u05D9\u05D5\u05EA \u05D4\u05E1\u05E4\u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05E9\u05DC\u05DB\u05DD\u2014\u05DE\u05E1\u05D3\u05D9 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD, APIs, \u05DB\u05DC\u05D9\u05DD \u05E4\u05E0\u05D9\u05DE\u05D9\u05D9\u05DD \u05D5\u05EA\u05D4\u05DC\u05D9\u05DB\u05D9\u05DD. \u05D1\u05D9\u05DF \u05D0\u05DD \u05D0\u05EA\u05DD \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD \u05D7\u05D9\u05D1\u05D5\u05E8 \u05E4\u05E9\u05D5\u05D8 \u05DC\u05DE\u05E1\u05D3 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D0\u05D5 \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05EA \u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4 \u05E2\u05E1\u05E7\u05D9\u05EA \u05DE\u05DC\u05D0\u05D4 \u05DE\u05D5\u05E0\u05E2\u05EA AI\u2014\u05D1\u05D5\u05D0\u05D5 \u05E0\u05D3\u05D1\u05E8 \u05D0\u05D9\u05DA MCP \u05D9\u05DB\u05D5\u05DC \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05E9\u05DC\u05DB\u05DD.",
          button: "\u05DC\u05D3\u05D5\u05DF \u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D9\u05EA MCP"
        }
      }
    }
  };

  const t = isHebrew ? content.he : content.en;

  return (
    <>
      <Header />
      <div className={`min-h-screen bg-white pt-24 pb-16 px-6 sm:px-8 lg:px-12 ${isHebrew ? 'rtl' : 'ltr'}`} dir={isHebrew ? 'rtl' : 'ltr'}>
        <div className="max-w-3xl mx-auto">
          <Link
            href={`/${locale}/blog`}
            className="inline-block text-gray-500 hover:text-gray-700 transition-colors mb-8"
          >
            {t.backToList}
          </Link>

        <article>
          <header className="mb-10">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <time>{t.date}</time>
              <span>•</span>
              <span>{t.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-950 leading-tight">
              {t.title}
            </h1>
          </header>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
            {/* Intro */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.intro.title}</h2>
              <p>{t.sections.intro.content}</p>
            </section>

            {/* Why MCP Matters */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.whyMatters.title}</h2>
              <p className="mb-4">{t.sections.whyMatters.content}</p>
              <ul className={`list-disc space-y-2 ${isHebrew ? 'pr-6' : 'pl-6'}`}>
                {t.sections.whyMatters.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </section>

            {/* How MCP Works */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.howWorks.title}</h2>
              <p className="mb-4">{t.sections.howWorks.content}</p>
              <div className="space-y-4">
                {t.sections.howWorks.capabilities.map((cap, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-1">{cap.title}</h3>
                    <p className="text-sm text-gray-600">{cap.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Use Cases */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-6">{t.sections.useCases.title}</h2>
              <div className="space-y-6">
                {t.sections.useCases.cases.map((useCase, i) => (
                  <div key={i} className={`border-${isHebrew ? 'r' : 'l'}-2 border-gray-200 ${isHebrew ? 'pr-4' : 'pl-4'}`}>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="mb-2">{useCase.content}</p>
                    <p className="text-sm text-gray-500 italic">{useCase.example}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Implementation */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-6">{t.sections.implementation.title}</h2>
              <div className="space-y-4">
                {t.sections.implementation.steps.map((step, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{step.title}</h3>
                    <p>{step.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.security.title}</h2>
              <div className="space-y-3">
                {t.sections.security.items.map((item, i) => (
                  <p key={i}>
                    <strong>{item.bold}:</strong> {item.text}
                  </p>
                ))}
              </div>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.techStack.title}</h2>
              <p className="mb-4">{t.sections.techStack.content}</p>
              <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">{t.sections.techStack.code}</p>
            </section>

            {/* CTA */}
            <section className="border-t border-gray-200 pt-8 mt-10">
              <h2 className="text-xl font-medium text-gray-950 mb-4">{t.sections.cta.title}</h2>
              <p className="mb-6">{t.sections.cta.content}</p>
              <a
                href="https://wa.me/972546522485?text=Hi%20Asaf,%20I'm%20interested%20in%20MCP%20integration%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white text-sm font-medium rounded-full hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t.sections.cta.button}
              </a>
            </section>
          </div>
        </article>
        </div>
      </div>
    </>
  )
}
