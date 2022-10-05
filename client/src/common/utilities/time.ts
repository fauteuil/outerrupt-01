import { Duration } from 'luxon';
import { DateTimeFormats, DateTimeUnits } from '../defaults';

const { Hour, Minute, Second } = DateTimeUnits;
export const FULL_TIME_DEFAULT = Minute * 15;

export function formatTime(
  milliseconds: number,
  format: string = milliseconds > Hour
    ? DateTimeFormats.Hours
    : DateTimeFormats.Minutes
): string {
  return Duration.fromObject({ milliseconds }).toFormat(format);
}
