/**
 * Keyword Implementation Guide for NextGen Flight Academy
 *
 * This file provides guidance on implementing the comprehensive keyword strategy
 * across all pages of the website based on page type and content focus.
 */

// Import keyword categories from consts.ts
import {
  PRIMARY_KEYWORDS,
  AVIATION_TRAINING_KEYWORDS,
  MOUNTAIN_FLYING_KEYWORDS,
  LOCAL_SEO_KEYWORDS,
  LONG_TAIL_KEYWORDS,
  AIRCRAFT_KEYWORDS,
  COMPETITIVE_KEYWORDS,
  CAREER_KEYWORDS,
  TECHNICAL_KEYWORDS,
  REGULATORY_KEYWORDS,
  SEASONAL_KEYWORDS,
  DEMOGRAPHIC_KEYWORDS,
  PAIN_POINT_KEYWORDS,
  SAFETY_KEYWORDS,
  TECHNOLOGY_KEYWORDS,
  LIFESTYLE_KEYWORDS,
  BUSINESS_KEYWORDS,
  OWNERSHIP_KEYWORDS,
  HYPER_LOCAL_KEYWORDS,
  CONVERSION_KEYWORDS,
  CONTENT_KEYWORDS,
  HIGH_PRIORITY_KEYWORDS,
  CONTENT_FOCUSED_KEYWORDS,
  LOCAL_FOCUSED_KEYWORDS,
  COMMERCIAL_KEYWORDS,
  CAMPAIGN_KEYWORDS,
  EDUCATIONAL_KEYWORDS,
  TECHNOLOGY_FOCUSED_KEYWORDS,
} from "../consts.ts";

/**
 * Page-specific keyword mapping strategy
 */
export const pageKeywordStrategy = {
  // Homepage - Use high priority keywords
  index: HIGH_PRIORITY_KEYWORDS,

  // Training Programs
  "training-programs/index":
    AVIATION_TRAINING_KEYWORDS + ", " + PRIMARY_KEYWORDS,
  "training-programs/private-pilot":
    AVIATION_TRAINING_KEYWORDS + ", " + LONG_TAIL_KEYWORDS,
  "training-programs/instrument-rating":
    TECHNICAL_KEYWORDS + ", " + AVIATION_TRAINING_KEYWORDS,
  "training-programs/commercial-pilot":
    CAREER_KEYWORDS + ", " + AVIATION_TRAINING_KEYWORDS,
  "training-programs/certified-flight-instructor":
    CAREER_KEYWORDS + ", " + TECHNICAL_KEYWORDS,
  "training-programs/airline-transport-pilot":
    CAREER_KEYWORDS + ", " + REGULATORY_KEYWORDS,
  "training-programs/multi-engine-rating":
    AIRCRAFT_KEYWORDS + ", " + TECHNICAL_KEYWORDS,
  "training-programs/high-altitude-endorsement":
    MOUNTAIN_FLYING_KEYWORDS + ", " + TECHNICAL_KEYWORDS,
  "training-programs/high-performance-endorsement":
    AIRCRAFT_KEYWORDS + ", " + TECHNICAL_KEYWORDS,
  "training-programs/complex-endorsement":
    AIRCRAFT_KEYWORDS + ", " + TECHNICAL_KEYWORDS,
  "training-programs/career": CAREER_KEYWORDS + ", " + COMPETITIVE_KEYWORDS,

  // Fleet Pages
  "our-fleet/index": AIRCRAFT_KEYWORDS + ", " + COMPETITIVE_KEYWORDS,
  "our-fleet/cessna-152": AIRCRAFT_KEYWORDS + ", " + AVIATION_TRAINING_KEYWORDS,
  "our-fleet/cessna-172": AIRCRAFT_KEYWORDS + ", " + AVIATION_TRAINING_KEYWORDS,
  "our-fleet/cessna-172H":
    AIRCRAFT_KEYWORDS + ", " + AVIATION_TRAINING_KEYWORDS,
  "our-fleet/cessna-172L":
    AIRCRAFT_KEYWORDS + ", " + AVIATION_TRAINING_KEYWORDS,
  "our-fleet/piper-warrior":
    AIRCRAFT_KEYWORDS + ", " + AVIATION_TRAINING_KEYWORDS,
  "our-fleet/cherokee-arrow": AIRCRAFT_KEYWORDS + ", " + TECHNICAL_KEYWORDS,
  "our-fleet/beechcraft-duchess": AIRCRAFT_KEYWORDS + ", " + TECHNICAL_KEYWORDS,
  "our-fleet/redbird-simulator":
    TECHNOLOGY_KEYWORDS + ", " + TECHNICAL_KEYWORDS,

  // About Pages
  "about/index": COMPETITIVE_KEYWORDS + ", " + PRIMARY_KEYWORDS,
  "about/faqs": PAIN_POINT_KEYWORDS + ", " + CONTENT_KEYWORDS,
  "about/financing": CONVERSION_KEYWORDS + ", " + REGULATORY_KEYWORDS,
  "about/partnerships": BUSINESS_KEYWORDS + ", " + COMPETITIVE_KEYWORDS,
  "about/pilot-resource-center": CONTENT_KEYWORDS + ", " + EDUCATIONAL_KEYWORDS,

  // Location Pages
  contact: LOCAL_FOCUSED_KEYWORDS,
  "riverside/index": LOCAL_SEO_KEYWORDS + ", " + PRIMARY_KEYWORDS,
  "redlands/index": LOCAL_SEO_KEYWORDS + ", " + PRIMARY_KEYWORDS,

  // Riverside Training Programs
  "riverside/private-pilot":
    LOCAL_SEO_KEYWORDS + ", " + AVIATION_TRAINING_KEYWORDS,
  "riverside/instrument-rating": LOCAL_SEO_KEYWORDS + ", " + TECHNICAL_KEYWORDS,
  "riverside/commercial-pilot": LOCAL_SEO_KEYWORDS + ", " + CAREER_KEYWORDS,
  "riverside/certified-flight-instructor":
    LOCAL_SEO_KEYWORDS + ", " + CAREER_KEYWORDS,
  "riverside/airline-transport-pilot":
    LOCAL_SEO_KEYWORDS + ", " + CAREER_KEYWORDS,
  "riverside/multi-engine-rating":
    LOCAL_SEO_KEYWORDS + ", " + AIRCRAFT_KEYWORDS,
  "riverside/high-altitude-endorsement":
    LOCAL_SEO_KEYWORDS + ", " + MOUNTAIN_FLYING_KEYWORDS,
  "riverside/high-performance-endorsement":
    LOCAL_SEO_KEYWORDS + ", " + AIRCRAFT_KEYWORDS,
  "riverside/complex-endorsement":
    LOCAL_SEO_KEYWORDS + ", " + AIRCRAFT_KEYWORDS,
  "riverside/career": LOCAL_SEO_KEYWORDS + ", " + CAREER_KEYWORDS,

  // Redlands Training Programs
  "redlands/private-pilot":
    LOCAL_SEO_KEYWORDS + ", " + AVIATION_TRAINING_KEYWORDS,
  "redlands/instrument-rating": LOCAL_SEO_KEYWORDS + ", " + TECHNICAL_KEYWORDS,
  "redlands/commercial-pilot": LOCAL_SEO_KEYWORDS + ", " + CAREER_KEYWORDS,
  "redlands/certified-flight-instructor":
    LOCAL_SEO_KEYWORDS + ", " + CAREER_KEYWORDS,
  "redlands/airline-transport-pilot":
    LOCAL_SEO_KEYWORDS + ", " + CAREER_KEYWORDS,
  "redlands/multi-engine-rating": LOCAL_SEO_KEYWORDS + ", " + AIRCRAFT_KEYWORDS,
  "redlands/high-altitude-endorsement":
    LOCAL_SEO_KEYWORDS + ", " + MOUNTAIN_FLYING_KEYWORDS,
  "redlands/high-performance-endorsement":
    LOCAL_SEO_KEYWORDS + ", " + AIRCRAFT_KEYWORDS,
  "redlands/complex-endorsement": LOCAL_SEO_KEYWORDS + ", " + AIRCRAFT_KEYWORDS,
  "redlands/career": LOCAL_SEO_KEYWORDS + ", " + CAREER_KEYWORDS,

  // Intro Flight Pages
  "intro-flight": CONVERSION_KEYWORDS + ", " + PRIMARY_KEYWORDS,
  "local-intro-flight": CONVERSION_KEYWORDS + ", " + LOCAL_SEO_KEYWORDS,
  "disneyland-intro-flight": CONVERSION_KEYWORDS + ", " + LIFESTYLE_KEYWORDS,
  "hollywood-sign-intro-flight":
    CONVERSION_KEYWORDS + ", " + LIFESTYLE_KEYWORDS,
  "catalina-intro-flight": CONVERSION_KEYWORDS + ", " + LIFESTYLE_KEYWORDS,
  "dana-point-intro-flight": CONVERSION_KEYWORDS + ", " + LIFESTYLE_KEYWORDS,
  "intro-flight-lesson":
    CONVERSION_KEYWORDS + ", " + AVIATION_TRAINING_KEYWORDS,

  // Forms and Conversion Pages
  enrollment: CONVERSION_KEYWORDS + ", " + REGULATORY_KEYWORDS,
  "intro-flight-form": CONVERSION_KEYWORDS + ", " + LOCAL_SEO_KEYWORDS,
  "quiz-form": CONVERSION_KEYWORDS + ", " + PAIN_POINT_KEYWORDS,

  // Content Pages
  "blog/index": CONTENT_FOCUSED_KEYWORDS,
  "new-to-flying": PAIN_POINT_KEYWORDS + ", " + CONTENT_KEYWORDS,
  "why-become-a-pilot": CAREER_KEYWORDS + ", " + LIFESTYLE_KEYWORDS,
  "high-altitude-endorsement":
    MOUNTAIN_FLYING_KEYWORDS + ", " + PRIMARY_KEYWORDS,

  // Location-specific pages
  "location/[slug]": HYPER_LOCAL_KEYWORDS + ", " + LOCAL_SEO_KEYWORDS,
};

/**
 * Seasonal keyword recommendations by month
 */
export const seasonalKeywords = {
  january:
    "new year pilot resolutions, winter flying training California, holiday gift flight lessons",
  february: "winter weather flying, winter flying training California",
  march: "spring pilot courses, back to school aviation programs",
  april: "spring pilot courses, Easter flight training gifts",
  may: "summer flight training preparation, graduate pilot programs",
  june: "summer pilot camp, summer flight training, graduate aviation programs",
  july: "summer pilot camp, vacation flight training, independence day flying",
  august: "back to school aviation programs, summer pilot camp",
  september: "fall aviation programs, back to school aviation programs",
  october: "fall aviation programs, autumn flying training",
  november: "holiday gift flight lessons, thanksgiving aviation",
  december:
    "holiday gift flight lessons, winter flying preparation, Christmas flight training gifts",
};

/**
 * Meta description templates for different page types
 */
export const metaDescriptionTemplates = {
  trainingProgram: (program, location) =>
    `${program} training at NextGen Flight Academy in ${location}. Professional flight instruction with experienced CFIs, modern aircraft, and proven 95% checkride pass rates. FAA Part 141/61 approved programs.`,

  fleet: (aircraft) =>
    `Train in our ${aircraft} at NextGen Flight Academy. Modern, well-maintained aircraft with glass cockpit options. Available at Riverside and Redlands locations for flight training.`,

  location: (city) =>
    `NextGen Flight Academy ${city} location offers comprehensive pilot training from Private Pilot to ATP. High altitude endorsement specialists with 320 flying days per year.`,

  introFlight: (destination) =>
    `Experience the thrill of flying with NextGen Flight Academy's ${destination} intro flight. Professional instruction, scenic routes, and flexible scheduling in Riverside and Redlands, CA.`,
};

/**
 * Implementation checklist for each page type
 */
export const implementationChecklist = {
  required: [
    "Update pageKeywords with relevant category keywords",
    "Ensure primary keywords are included",
    "Add location-specific terms for local SEO",
    "Include conversion keywords on action pages",
    "Add seasonal keywords when appropriate",
  ],

  optimization: [
    "Limit to 5-8 primary keyword phrases per page",
    "Include 2-3 long-tail keywords in meta description",
    "Use geographic modifiers for local pages",
    "Add demographic keywords for targeted content",
    "Include technical terms for advanced training pages",
  ],

  monitoring: [
    "Track keyword performance in Google Analytics",
    "Monitor search console for keyword rankings",
    "Update seasonal keywords quarterly",
    "Review and refresh keywords annually",
    "A/B test meta descriptions for conversion pages",
  ],
};

export default {
  pageKeywordStrategy,
  seasonalKeywords,
  metaDescriptionTemplates,
  implementationChecklist,
};
