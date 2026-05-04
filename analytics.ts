// Conversion tracking event names. Wire to GA4, Segment, or Meta Pixel via the
// provider of your choice. The placeholder dispatches a window event so any
// loaded analytics layer can pick it up without coupling this codebase to a
// specific vendor.

export type FunnelEvent =
    | "lead_magnet_view"
    | "lead_magnet_download"
    | "diagnostic_start"
    | "diagnostic_question_answered"
    | "diagnostic_complete"
    | "result_view"
    | "application_start"
    | "application_submit"
    | "booking_view"
    | "booking_scheduled"
    | "limitless_view"
    | "limitless_signup"
    | "speaking_view"
    | "speaking_inquiry"
    | "email_capture";

export function track(event: FunnelEvent, payload: Record<string, unknown> = {}) {
    if (typeof window === "undefined") return;
    const detail = { event, payload, ts: Date.now() };
    window.dispatchEvent(new CustomEvent("funnel:event", { detail }));
    // gtag/segment passthrough
    // @ts-expect-error - vendor globals are optional
    if (window.gtag) window.gtag("event", event, payload);
    // @ts-expect-error - vendor globals are optional
    if (window.analytics?.track) window.analytics.track(event, payload);
}
