export enum RevelationPlace {
  Madinah = "madinah",
  Makkah = "makkah",
}

export enum LanguageName {
  English = "english",
}

export interface TranslatedName {
  language_name: LanguageName;
  name: string;
}

export interface Chapter {
  id: number;
  revelation_place: RevelationPlace;
  revelation_order: number;
  bismillah_pre: boolean;
  name_simple: string;
  name_complex: string;
  name_arabic: string;
  verses_count: number;
  pages: number[];
  chapter_number: number;
  translated_name: TranslatedName;
}
