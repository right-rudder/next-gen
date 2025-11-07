/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ENROLLMENT_FORM_WEBHOOK_URL: string;
  readonly CONTACT_US_FORM_WEBHOOK_URL: string;
  readonly QUICK_START_FORM_WEBHOOK_URL: string;
  readonly EMAIL_FORM_WEBHOOK_URL: string;
  readonly TRAINING_COURSE_FORM_WEBHOOK_URL: string;
  readonly INTRO_FLIGHT_FORM_WEBHOOK_URL: string;
  readonly GROUND_SCHOOL_SESSION_FORM_WEBHOOK_URL: string;
  readonly QUIZ_FORM_WEBHOOK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
