import { readFileSync, writeFileSync } from 'node:fs';

const auto = JSON.parse(readFileSync('storage/app/auto-masks.json', 'utf8'));

const original = {
    'person-04': {
        mask: [
            '365,481 334,488 309,507 292,543 284,585 286,635 295,684 298,738 301,793 305,852 311,918 316,986 321,1058 328,1127 339,1175 356,1196 368,1048 381,1200 404,1189 421,1163 427,1121 426,1064 422,1004 425,945 429,885 430,827 434,764 434,707 432,647 427,592 415,535 398,497',
        ],
        label: { x: 405, y: 700, side: 'left' },
    },
    'person-06': {
        mask: [
            '665,432 637,437 617,455 610,480 613,509 625,530 646,540 668,536 685,520 694,493 691,464 680,442',
            '616,526 646,520 673,531 696,553 706,586 704,620 693,648 672,663 648,650 631,625 620,584',
        ],
        label: { x: 680, y: 445, side: 'left' },
    },
    'person-07': {
        mask: [
            '728,430 692,439 668,466 657,508 657,554 640,590 628,620 644,640 664,602 668,654 667,710 668,770 672,835 676,903 681,972 688,1042 693,1112 702,1169 720,1195 738,1045 747,1204 775,1198 799,1176 812,1140 815,1094 812,1037 810,978 812,918 815,857 817,798 821,737 824,678 822,619 830,580 812,560 817,562 806,508 786,465 758,439',
        ],
        label: { x: 790, y: 690, side: 'left' },
    },
    'person-09': {
        mask: [
            '909,438 879,443 858,462 852,489 856,519 870,541 894,551 918,548 938,531 948,502 945,470 931,447',
            '850,540 885,531 919,539 946,560 963,592 969,631 969,672 965,715 965,760 964,800 930,802 900,792 870,760 861,698 855,633',
        ],
        label: { x: 930, y: 448, side: 'left' },
    },
    'person-10': {
        mask: [
            '1010,417 973,426 947,451 935,488 937,531 947,574 920,600 898,640 905,700 912,713 905,762 906,812 913,858 921,904 925,951 927,1003 930,1056 934,1108 940,1157 952,1190 974,1210 1004,1060 1004,1217 1036,1212 1060,1194 1074,1162 1079,1119 1080,1070 1080,1016 1083,965 1087,912 1092,859 1096,805 1098,752 1110,700 1099,646 1093,594 1110,560 1086,546 1073,500 1053,457 1034,430',
        ],
        label: { x: 1095, y: 720, side: 'left' },
    },
    'person-12': {
        mask: [
            '1209,410 1178,416 1157,438 1150,469 1158,500 1176,522 1201,530 1226,522 1242,500 1247,471 1239,440 1225,419',
            '1159,518 1192,510 1224,519 1250,543 1263,578 1267,620 1266,663 1262,704 1257,743 1248,774 1233,787 1216,780 1206,758 1198,726 1191,690 1183,655 1175,613 1167,570',
        ],
        label: { x: 1235, y: 422, side: 'left' },
    },
    'person-14': {
        mask: [
            '1382,409 1351,416 1330,438 1324,469 1332,500 1350,523 1374,532 1399,525 1417,504 1423,474 1415,442 1401,420',
            '1333,521 1367,514 1400,523 1427,549 1440,585 1447,631 1448,684 1448,741 1448,780 1418,788 1390,770 1376,682 1369,620 1358,565',
        ],
        label: { x: 1410, y: 418, side: 'left' },
    },
    'person-15': {
        mask: [
            '1511,450 1478,455 1455,475 1444,508 1445,546 1457,579 1435,620 1427,677 1427,788 1428,846 1430,906 1432,967 1434,1027 1437,1085 1441,1135 1451,1171 1470,1190 1498,1048 1498,1195 1525,1190 1544,1173 1555,1144 1560,1103 1562,1054 1562,1001 1563,946 1564,890 1564,834 1578,780 1562,722 1558,667 1570,620 1544,563 1533,514 1522,478',
        ],
        label: { x: 1570, y: 690, side: 'left' },
    },
};

const meta = {
    'person-01': { name: 'Član tima', title: 'ZU SC Dr Brkić', profileUrl: null, label: { x: 248, y: 620, side: 'left' } },
    'person-02': { name: 'Član tima', title: 'ZU SC Dr Brkić', profileUrl: null, label: { x: 312, y: 448, side: 'left' } },
    'person-03': { name: 'Član tima', title: 'ZU SC Dr Brkić', profileUrl: null, label: { x: 432, y: 448, side: 'left' } },
    'person-04': { name: 'Član tima', title: 'ZU SC Dr Brkić', profileUrl: null, label: { x: 405, y: 700, side: 'left' } },
    'person-05': { name: 'Član tima', title: 'ZU SC Dr Brkić', profileUrl: null, label: { x: 600, y: 700, side: 'left' } },
    'person-06': { name: 'Član tima', title: 'ZU SC Dr Brkić', profileUrl: null, label: { x: 680, y: 445, side: 'left' } },
    'person-07': { name: 'Član tima', title: 'ZU SC Dr Brkić', profileUrl: null, label: { x: 812, y: 680, side: 'left' } },
    'person-08': { name: 'Član tima', title: 'ZU SC Dr Brkić', profileUrl: null, label: { x: 858, y: 452, side: 'left' } },
    'person-09': {
        name: 'Dr Radenka Marković',
        title: 'Specijalista porodične medicine',
        profileUrl: '/doktori/radenka-markovic',
        label: { x: 930, y: 448, side: 'left' },
    },
    'person-10': {
        name: 'Dr Jovica Brkić',
        title: 'Specijalista radiologije',
        profileUrl: '/doktori/jovica-brkic',
        label: { x: 1110, y: 700, side: 'left' },
    },
    'person-11': { name: 'Član tima', title: 'ZU SC Dr Brkić', profileUrl: null, label: { x: 1160, y: 430, side: 'left' } },
    'person-12': { name: 'Član tima', title: 'ZU SC Dr Brkić', profileUrl: null, label: { x: 1250, y: 412, side: 'left' } },
    'person-13': { name: 'Član tima', title: 'ZU SC Dr Brkić', profileUrl: null, label: { x: 1375, y: 690, side: 'left' } },
    'person-14': { name: 'Član tima', title: 'ZU SC Dr Brkić', profileUrl: null, label: { x: 1428, y: 412, side: 'left' } },
    'person-15': { name: 'Član tima', title: 'ZU SC Dr Brkić', profileUrl: null, label: { x: 1590, y: 680, side: 'left' } },
    'person-16': { name: 'Član tima', title: 'ZU SC Dr Brkić', profileUrl: null, label: { x: 1760, y: 640, side: 'left' } },
    'person-17': { name: 'Član tima', title: 'ZU SC Dr Brkić', profileUrl: null, label: { x: 1948, y: 690, side: 'right' } },
};

const preferAuto = new Set([
    'person-01',
    'person-02',
    'person-03',
    'person-05',
    'person-08',
    'person-11',
    'person-13',
    'person-16',
    'person-17',
]);

function q(s) {
    return `'${s}'`;
}

function block(id) {
    const m = meta[id];
    let masks;
    let holes = [];
    if (preferAuto.has(id) && auto[id]?.outer) {
        masks = [auto[id].outer];
        holes = auto[id].holes ?? [];
    } else {
        masks = original[id].mask;
    }
    const holeLines =
        holes.length > 0
            ? `,\n        maskHoles: [\n${holes.map((h) => `            ${q(h)},`).join('\n')}\n        ]`
            : '';
    return `    member({
        id: ${q(id)},
        name: ${q(m.name)},
        title: ${q(m.title)},
        profileUrl: ${m.profileUrl ? q(m.profileUrl) : 'null'},
        maskPolygons: [
${masks.map((p) => `            ${q(p)},`).join('\n')}
        ]${holeLines},
        label: { x: ${m.label.x}, y: ${m.label.y}, side: ${q(m.label.side)} },
    })`;
}

const ids = Object.keys(meta);
const out = `export const TEAM_IMAGE = {
    width: 2048,
    height: 1365,
    src: '/images/tim/cijeli-tim.jpg',
} as const;

export type TeamMember = {
    id: string;
    name: string;
    title: string;
    profileUrl: string | null;
    maskPolygons: string[];
    maskHoles?: string[];
    hitPolygons: string[];
    label: { x: number; y: number; side?: 'left' | 'center' | 'right' };
};

function member(
    data: Omit<TeamMember, 'hitPolygons'> & { hitPolygons?: string[] },
): TeamMember {
    return { ...data, hitPolygons: data.hitPolygons ?? data.maskPolygons };
}

/*
 * Obrisi su izvučeni s fotografije (silueta osobe), ne šablonski likovi.
 * Prednji red ima razmak među nogama; drugi red samo vidljivu glavu i ramena.
 */
export const teamMembers: TeamMember[] = [
${ids.map(block).join(',\n')}
];
`;

writeFileSync('resources/js/data/teamPhoto.ts', out);
console.log('wrote teamPhoto.ts', ids.length);
