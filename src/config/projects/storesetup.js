export const storesetup = {
  heroImage: "/ecom-saas/1.png",
  heroImageAlt: "StoreSetup storefront homepage with category browsing and hero banner",
  highlight:
    "Built a scalable multi-tenant e-commerce SaaS with subdomain and custom domain isolation, merchant onboarding, RAG-powered assistant, AI product image studio, and finance tracking.",
  overview:
    "StoreSetup is a multi-tenant e-commerce SaaS platform that lets merchants create and manage online stores without building from scratch. Each merchant gets an isolated environment with subdomain or custom domain support, subscription management, employee RBAC, product catalog, inventory, orders, POS, analytics dashboards, a RAG merchant assistant, AI studio for product images, and a finance module for income, expense, profit, and loss tracking.",
  problem:
    "Small and medium-sized businesses often need an online store but lack the technical resources to develop and maintain a complete e-commerce platform. Traditional e-commerce development requires separate build and maintenance for a storefront, admin panel, product management, order management, inventory, customer management, payment integration, notifications, and mobile applications.",
  solution:
    "Created a reusable SaaS platform where all of these capabilities are available as a single product. Each merchant operates through an isolated tenant — for example, store-a.example.com maps to Tenant A with its own products, orders, and customers, completely separate from Merchant B on store-b.example.com. The backend identifies the tenant from each request and scopes every database query to that tenant, so merchants never access each other's data.",
  features: [
    {
      title: "Custom domains",
      description:
        "Subdomain-based tenant isolation with custom domain support so each merchant runs on their own branded URL.",
    },
    {
      title: "RAG merchant assistant",
      description:
        "Retrieval-augmented generation system helping merchants get answers and guidance inside the platform.",
    },
    {
      title: "AI product image studio",
      description:
        "AI-powered image enhancement for e-commerce product listings.",
    },
    {
      title: "Finance module",
      description:
        "Track income, expenses, profit, and loss alongside sales and order data.",
    },
    {
      title: "Merchant onboarding & RBAC",
      description:
        "Subscription management and role-based access control for merchant employees.",
    },
    {
      title: "Online store",
      description:
        "Product catalog with categories, variations, images, search, filtering, product details, shopping cart, and checkout.",
    },
    {
      title: "Order management",
      description:
        "Order creation, status tracking, order history, customer information, payment status, and order administration.",
    },
    {
      title: "Inventory",
      description:
        "Stock management, inventory tracking, product availability, and automatic stock updates based on orders.",
    },
    {
      title: "Admin dashboard",
      description:
        "Product, category, customer, order, and inventory management plus store configuration and analytics.",
    },
    {
      title: "RESTful APIs",
      description:
        "Authentication, product, cart, order, customer, and admin APIs designed for web and mobile clients.",
    },
    {
      title: "Point of Sale (POS)",
      description:
        "In-store checkout with product search, cart builder, customer details, and instant order creation.",
    },
    {
      title: "Sales analytics",
      description:
        "Dashboard KPIs for revenue, orders, customers, average order value, and revenue trends.",
    },
  ],
  screenshots: [
    {
      label: "Storefront",
      image: "/ecom-saas/1.png",
      imageAlt: "StoreSetup storefront homepage with categories and hero banner",
    },
    {
      label: "Product Detail",
      image: "/ecom-saas/2.png",
      imageAlt: "Product detail page with variant selection and add to cart",
    },
    {
      label: "Dashboard",
      image: "/ecom-saas/3.png",
      imageAlt: "Admin dashboard with revenue KPIs and order pipeline",
    },
    {
      label: "POS",
      image: "/ecom-saas/4.png",
      imageAlt: "Point of Sale interface for walk-in order creation",
    },
    {
      label: "Products",
      image: "/ecom-saas/5.png",
      imageAlt: "Product management with filters and catalog analytics",
    },
  ],
  video: null,
  challenges: [
    {
      title: "Multi-tenancy",
      description:
        "The biggest challenge was ensuring one merchant could never access another merchant's data. Tenant middleware scopes every query and API response to the active store.",
    },
    {
      title: "Inventory consistency",
      description:
        "Orders change inventory, so stock updates must remain consistent even when multiple requests happen at the same time.",
    },
    {
      title: "Payment integration",
      description:
        "Payment processing requires handling successful payments, failed payments, callbacks and webhooks, and order status synchronization.",
    },
    {
      title: "Performance",
      description:
        "Product catalogs and order data grow quickly, so caching and database optimization become essential at scale.",
    },
    {
      title: "Asynchronous processing",
      description:
        "Email and SMS notifications and other background operations should not block the main request. Redis and Celery handle these jobs.",
    },
  ],
  lessonsLearned: [
    "Tenant isolation at the middleware layer is cleaner than sprinkling tenant filters in every view — one enforcement point prevents data leaks.",
    "Inventory updates tied to order lifecycle need atomic operations to stay correct under concurrent requests.",
    "Payment webhooks and order status must be designed together — a successful payment with a stuck order is worse than a failed checkout.",
    "Background jobs for notifications keep the storefront responsive when order volume spikes.",
  ],
  role: [
    "Designed REST APIs using Django REST Framework",
    "Implemented multi-tenant backend architecture",
    "Designed database models for products, orders, and inventory",
    "Implemented authentication and authorization",
    "Built product, inventory, customer, and order management",
    "Integrated Redis and Celery for asynchronous processing",
    "Developed admin functionality and analytics dashboard",
    "Worked on Next.js frontend integration",
    "Designed APIs for React Native mobile applications",
    "Worked with Docker and deployment infrastructure",
  ],
  tech: [
    "Python",
    "Django",
    "DRF",
    "PostgreSQL",
    "Redis",
    "Celery",
    "Next.js",
    "React",
    "React Native",
    "Expo",
    "Tailwind CSS",
    "Docker",
    "Linux",
    "Git",
    "CI/CD",
  ],
};
