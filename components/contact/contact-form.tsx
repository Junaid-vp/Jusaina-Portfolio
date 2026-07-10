"use client";

import { useActionState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";
import { submitContactForm, type ContactFormState } from "@/app/actions";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    null
  );

  const {
    register,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on successful submission
  useEffect(() => {
    if (state?.success) {
      reset();
      formRef.current?.reset();
    }
  }, [state, reset]);

  return (
    <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
      {/* Status messages */}
      {state && (
        <div
          className={`mb-6 p-4 rounded-xl flex items-start gap-3 text-sm ${
            state.success
              ? "bg-sage/15 text-foreground border border-sage/30"
              : "bg-primary/10 text-foreground border border-primary/20"
          }`}
          role="alert"
        >
          {state.success ? (
            <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          )}
          <p>{state.message}</p>
        </div>
      )}

      <form ref={formRef} action={formAction} className="space-y-5" noValidate>
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            {...register("name")}
            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground text-sm placeholder:text-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/50 transition-colors"
            placeholder="Your name…"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-primary" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground text-sm placeholder:text-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/50 transition-colors"
            placeholder="your.email@example.com"
            spellCheck={false}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-primary" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="contact-subject"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            {...register("subject")}
            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground text-sm placeholder:text-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/50 transition-colors"
            placeholder="What would you like to discuss?"
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1.5 text-xs text-primary" role="alert">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            {...register("message")}
            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground text-sm placeholder:text-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/50 transition-colors resize-y min-h-[120px]"
            placeholder="Tell me how I can help…"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-primary" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-medium rounded-xl hover:bg-rose-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Send Message ♡"
          )}
        </button>
      </form>
    </div>
  );
}
