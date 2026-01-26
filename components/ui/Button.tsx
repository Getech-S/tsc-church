import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          // Variants
          variant === 'primary' && "bg-church-red text-white hover:bg-red-600 shadow-md",
          variant === 'outline' && "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
          variant === 'ghost' && "hover:bg-gray-100 text-gray-700",
          // Sizes
          size === 'sm' && "h-9 px-4 text-sm",
          size === 'md' && "h-11 px-8 text-base",
          size === 'lg' && "h-14 px-10 text-lg",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }