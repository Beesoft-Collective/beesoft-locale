import type { Locale } from "date-fns";
import {
  af,
  ar,
  arDZ,
  arEG,
  arMA,
  arSA,
  arTN,
  az,
  be,
  beTarask,
  bg,
  bn,
  bs,
  ca,
  cs,
  cy,
  da,
  de,
  deAT,
  el,
  enAU,
  enCA,
  enGB,
  enIE,
  enIN,
  enNZ,
  enUS,
  enZA,
  eo,
  es,
  et,
  eu,
  faIR,
  fi,
  fr,
  frCA,
  frCH,
  fy,
  gd,
  gl,
  gu,
  he,
  hi,
  hr,
  ht,
  hu,
  hy,
  id,
  is,
  it,
  itCH,
  ja,
  jaHira,
  ka,
  kk,
  km,
  kn,
  ko,
  lb,
  lt,
  lv,
  mk,
  mn,
  ms,
  mt,
  nb,
  nl,
  nlBE,
  nn,
  oc,
  pl, pt, ptBR, ro, ru, sk, sl, sq, sr, srLatn, sv, ta, te, th, tr, ug, uk, uz, uzCyrl, vi, zhCN, zhHK, zhTW
} from 'date-fns/locale';

const getBrowserLocale = () => window.navigator.languages ? window.navigator.languages[0] : window.navigator.language;

const getLocaleData = (localeName: string) => {
  const [language, locale] = localeName.split('-');

  switch (language) {
    case 'af':
      return af;
    case 'ar':
      switch (locale) {
        case 'DZ':
          return arDZ;
        case 'EG':
          return arEG;
        case 'MA':
          return arMA;
        case 'SA':
          return arSA;
        case 'TN':
          return arTN;
        default:
          return ar;
      }
    case 'az':
      return az;
    case 'be':
      switch (locale) {
        case 'tarask':
          return beTarask;
        default:
          return be;
      }
    case 'bg':
      return bg;
    case 'bn':
      return bn;
    case 'bs':
      return bs;
    case 'ca':
      return ca;
    case 'cs':
      return cs;
    case 'cy':
      return cy;
    case 'da':
      return da;
    case 'de':
      switch (locale) {
        case 'AT':
          return deAT;
        default:
          return de;
      }
    case 'el':
      return el;
    case 'en':
      switch (locale) {
        case 'AU':
          return enAU;
        case 'CA':
          return enCA;
        case 'GB':
          return enGB;
        case 'IE':
          return enIE;
        case 'IN':
          return enIN;
        case 'NZ':
          return enNZ;
        case 'US':
          return enUS;
        default:
          return enZA;
      }
    case 'eo':
      return eo;
    case 'es':
      return es;
    case 'et':
      return et;
    case 'eu':
      return eu;
    case 'fa':
      return faIR;
    case 'fi':
      return fi;
    case 'fr':
      switch (locale) {
        case 'CA':
          return frCA;
        case 'CH':
          return frCH;
        default:
          return fr;
      }
    case 'fy':
      return fy;
    case 'gd':
      return gd;
    case 'gl':
      return gl;
    case 'gu':
      return gu;
    case 'he':
      return he;
    case 'hi':
      return hi;
    case 'hr':
      return hr;
    case 'ht':
      return ht;
    case 'hu':
      return hu;
    case 'hy':
      return hy;
    case 'id':
      return id;
    case 'is':
      return is;
    case 'it':
      switch (locale) {
        case 'CH':
          return itCH;
        default:
          return it;
      }
    case 'ja':
      switch (locale) {
        case 'Hira':
          return jaHira;
        default:
          return ja;
      }
    case 'ka':
      return ka;
    case 'kk':
      return kk;
    case 'km':
      return km;
    case 'kn':
      return kn;
    case 'ko':
      return ko;
    case 'lb':
      return lb;
    case 'lt':
      return lt;
    case 'lv':
      return lv;
    case 'mk':
      return mk;
    case 'mn':
      return mn;
    case 'ms':
      return ms;
    case 'mt':
      return mt;
    case 'nb':
      return nb;
    case 'nl':
      switch (locale) {
        case 'BE':
          return nlBE;
        default:
          return nl;
      }
    case 'nn':
      return nn;
    case 'oc':
      return oc;
    case 'pl':
      return pl;
    case 'pt':
      switch (locale) {
        case 'BR':
          return ptBR;
        default:
          return pt;
      }
    case 'ro':
      return ro;
    case 'ru':
      return ru;
    case 'sk':
      return sk;
    case 'sl':
      return sl;
    case 'sq':
      return sq;
    case 'sr':
      switch (locale) {
        case 'Latn':
          return srLatn;
        default:
          return sr;
      }
    case 'sv':
      return sv;
    case 'ta':
      return ta;
    case 'te':
      return te;
    case 'th':
      return th;
    case 'tr':
      return tr;
    case 'ug':
      return ug;
    case 'uk':
      return uk;
    case 'uz':
      switch (locale) {
        case 'Cyrl':
          return uzCyrl;
        default:
          return uz;
      }
    case 'vi':
      return vi;
    case 'zh':
      switch (locale) {
        case 'CN':
          return zhCN;
        case 'HK':
          return zhHK;
        default:
          return zhTW;
      }
    default:
      return enAU;
  }
};

const useDateLocale = (locale?: string): Locale => {
  const _locale = locale ?? getBrowserLocale();
  return getLocaleData(_locale);
};

export { useDateLocale };
