export const skills = [
    {
        key: "coreLanguages",
        // Taurus: two arms meeting at a central star (Aldebaran), plus a
        // long tail to the horn tip. Last star held in reserve.
        constellation: [
            { x: 12, y: 28 },
            { x: 30, y: 44 },
            { x: 56, y: 54 },
            { x: 49, y: 33 },
            { x: 29, y: 12 },
            { x: 86, y: 61 },
        ],
        connections: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
            [2, 5],
        ] as [number, number][],
    },
    {
        key: "frameworks",
        // Cassiopeia (zigzag) + 1 reserve star
        constellation: [
            { x: 31, y: 31 },
            { x: 41, y: 47 },
            { x: 56, y: 46 },
            { x: 63, y: 63 },
            { x: 79, y: 52 },
        ],
    },
    {
        key: "libraries",
        // Aquila: Tarazed-Altair-Alshain chain, a central star branching
        // to the left arm, the tail (λ Aquilae), and the right wing.
        // 2 stars held in reserve.
        constellation: [
            { x: 42, y: 21 },
            { x: 37, y: 28 },
            { x: 31, y: 37 },
            { x: 59, y: 55 },
            { x: 30, y: 59 },
            { x: 10, y: 64 },
            { x: 74, y: 90 },
            { x: 85, y: 14 },
            { x: 91, y: 10 },
        ],
        connections: [
            [0, 1],
            [1, 2],
            [1, 3],
            [3, 4],
            [4, 5],
            [3, 6],
            [3, 7],
            [7, 8],
        ] as [number, number][],
    },
    {
        key: "uiStyling",
        // Delphinus (Sualocin/Rotanev style): a left star branching into
        // two arms that meet again at a central star, plus a long tail.
        // 1 reserve star.
        constellation: [
            { x: 15, y: 22 },
            { x: 41, y: 18 },
            { x: 30, y: 35 },
            { x: 55, y: 36 },
            { x: 85, y: 82 },
        ],
        connections: [
            [0, 1],
            [1, 3],
            [0, 2],
            [2, 3],
            [3, 4],
        ] as [number, number][],
    },
    {
        key: "tools",
        // Ursa Major / Big Dipper: a 3-star handle attached to a 4-star
        // bowl. Last bowl corner held in reserve.
        constellation: [
            { x: 13, y: 31 },
            { x: 31, y: 30 },
            { x: 43, y: 38 },
            { x: 58, y: 47 },
            { x: 88, y: 50 },
            { x: 82, y: 66 },
            { x: 60, y: 61 },
        ],
        connections: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5],
            [5, 6],
            [6, 3],
        ] as [number, number][],
    },
    {
        key: "architecture",
        // Orion: the belt (Mintaka-Alnilam-Alnitak) in the middle, with
        // each belt-end star opening outward to one star above and one
        // below, forming the imperfect trapezoid. Alnitak held in reserve.
        constellation: [
            { x: 18, y: 16 },
            { x: 74, y: 6 },
            { x: 29, y: 91 },
            { x: 82, y: 94 },
            { x: 44, y: 54 },
            { x: 52, y: 50 },
            { x: 64, y: 45 },
        ],
        connections: [
            [0, 4],
            [4, 2],
            [4, 5],
            [5, 6],
            [6, 1],
            [6, 3],
            [0, 1],
            [2, 3],
        ] as [number, number][],
        // The belt (indices 4,5,6) sits tightly together; flip the middle
        // one's label above the star so it doesn't collide with its
        // neighbors' labels below.
        flippedLabels: [5],
    },
];
