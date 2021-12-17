declare module "emoji-flags-to-country" {
    export function flagToCountry(flag: string): string;
    export function getFlagsInText(text: string): string[];
}