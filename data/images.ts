/** Registri foto sentral — foto bawah laut sinematik.
 *  Aset lokal di /public/images/photos (dapat diganti). */

const P = (f: string) => `/images/photos/${f}`;

export const PHOTOS = {
  hero: P("hero.png"),
  heroAlt: "Freediver meluncur anggun di kedalaman biru dengan sinar matahari dari permukaan",
  pool: P("pool.png"),
  reef1: P("reef1.png"),
  reef2: P("reef2.png"),
  buddy: P("buddy.png"),
  community1: P("community1.png"),
  community2: P("community2.png"),
  deepwall: P("deepwall.png"),
  nightdive: P("nightdive.png"),
  cleanup: P("cleanup.png"),
  turtle: P("turtle.png"),
  wreck: P("wreck.png"),
  surface: P("surface.png"),
} as const;

/** Set foto untuk kartu kursus. */
export const COURSE_PHOTOS = {
  beginner: [PHOTOS.pool, PHOTOS.reef1, PHOTOS.surface],
  advanced: [PHOTOS.deepwall, PHOTOS.wreck, PHOTOS.nightdive, PHOTOS.reef2],
};

export const EVENT_PHOTOS = [
  PHOTOS.reef1,
  PHOTOS.turtle,
  PHOTOS.pool,
  PHOTOS.deepwall,
  PHOTOS.cleanup,
];

export const COMMUNITY_PHOTOS = [
  PHOTOS.community1,
  PHOTOS.community2,
  PHOTOS.cleanup,
  PHOTOS.turtle,
];
