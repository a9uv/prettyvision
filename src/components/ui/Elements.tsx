import type * as React from "react"

// Simple utility function to merge classes (replaces cn from @/lib/utils)
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ")
}

// Button Component (simplified without cva and Slot dependencies)
interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

function Button({ className, variant = "default", size = "default", ...props }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2"

  const variantClasses = {
    default: "bg-slate-900 text-white shadow hover:bg-slate-800",
    destructive: "bg-red-500 text-white shadow hover:bg-red-600",
    outline: "border border-slate-200 bg-white shadow-sm hover:bg-slate-50",
    secondary: "bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-200",
    ghost: "hover:bg-slate-100",
    link: "text-slate-900 underline-offset-4 hover:underline",
  }

  const sizeClasses = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3",
    lg: "h-10 rounded-md px-6",
    icon: "h-9 w-9",
  }

  return <button className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...props} />
}

// Card Components (simplified)
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-white text-slate-950 flex flex-col gap-6 rounded-xl border border-slate-200 py-6 shadow-sm",
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("grid auto-rows-min items-start gap-1.5 px-6", className)} {...props} />
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("leading-none font-semibold", className)} {...props} />
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("text-slate-500 text-sm", className)} {...props} />
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("px-6", className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex items-center px-6", className)} {...props} />
}

export { Button, Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
