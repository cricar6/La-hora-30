// 0 for text, 1 for img, 2 for vid
let projects = [
    {
        leader: {
            id: "marta",
            name: "Marta García",
            age: "42 años",
            place: "Barrio La Paz",
            title: "Educadora Popular",
            thumb: "https://i.imgur.com/iMiuJu2.png"
        },
        media: [
            {
                type: 2, id: "marta_00",
                toProject: "leader:marta&media:0",
                source: "https://www.youtube.com/watch?v=yMnJajOOIJQ",
                thumb: "https://i.imgur.com/VBqO8TP.png"
            }, {
                type: 2, id: "marta_01",
                toProject: "leader:marta&media:1",
                source: "https://www.youtube.com/watch?v=jlpeNf2dKcI",
                thumb: "https://i.imgur.com/7HWKnOE.png"
            }, {
                type: 2, id: "marta_02",
                toProject: "leader:marta&media:2",
                source: "https://www.youtube.com/watch?v=dgBEsR4JJog",
                thumb: "https://i.imgur.com/Th841vO.png"
            }, {
                type: 2, id: "marta_03",
                toProject: "leader:marta&media:3",
                source: "https://www.youtube.com/watch?v=xy5nJOiZG8s",
                thumb: "https://i.imgur.com/cPoqqQ9.png"
            }, {
                type: 2, id: "marta_04",
                toProject: "leader:marta&media:4",
                source: "https://www.youtube.com/watch?v=L58-wA-IzEU",
                thumb: "https://i.imgur.com/vc2QbcG.png"
            }, {
                type: 2, id: "marta_05",
                toProject: "leader:marta&media:5",
                source: "--",
                thumb: "https://i.imgur.com/MmoQ9y9.png"
            }
        ]
    }, {
        leader: {
            id: "miguel",
            name: "Miguel Anacona",
            age: "27 años",
            place: "Barrio El Poblado I",
            title: "Constructor en Guadua",
            thumb: "https://i.imgur.com/PLQ15xw.png"
        },
        media: [
            {
                type: 2, id: "miguel_00",
                toProject: "leader:miguel&media:0",
                source: "https://www.youtube.com/watch?v=oNHQaGgQ05g",
                thumb: "https://i.imgur.com/G6c22K3.png"
            }, {
                type: 2, id: "miguel_01",
                toProject: "leader:miguel&media:1",
                source: "https://www.youtube.com/watch?v=m1_ThrVv4Tc",
                thumb: "https://i.imgur.com/XMV8t1s.png"
            }, {
                type: 2, id: "miguel_02",
                toProject: "leader:_miguel&media:2",
                source: "https://www.youtube.com/watch?v=zXO6ua_ia6Y",
                thumb: "https://i.imgur.com/FJivTFu.png"
            }, {
                type: 2, id: "miguel_03",
                toProject: "leader:miguel&media:3",
                source: "https://www.youtube.com/watch?v=6OVGZGqqftg",
                thumb: "https://i.imgur.com/BAaIRg8.png"
            }, {
                type: 2, id: "miguel_04",
                toProject: "leader:miguel&media:4",
                source: "https://www.youtube.com/watch?v=oNHQaGgQ05g",
                thumb: "https://i.imgur.com/G6c22K3.png"
            }, {
                type: 2, id: "miguel_05",
                toProject: "leader:miguel&media:5",
                source: "https://www.youtube.com/watch?v=DlQOKY2tK7Q",
                thumb: "https://i.imgur.com/fhPMwwI.png"
            }, {
                type: 2, id: "miguel_06",
                toProject: "leader:_miguel&media:6",
                source: "https://www.youtube.com/watch?v=j52dPJRHmWo",
                thumb: "https://i.imgur.com/FeWKifm.png"
            }
        ]
    }, {
        leader: {
            id: "henri",
            name: "Henri Zamora",
            age: "71 años",
            place: "Barrio Alfonso Bonilla Aragón",
            title: "Coordinador del Adulto Mayor",
            thumb: "https://i.imgur.com/Neu6Ffy.png"
        },
        media: [
            {
                type: 2,
                id: "henri_00",
                toProject: "leader:henri&media:0",
                source: "https://www.youtube.com/watch?v=cD8-wfwdtmA",
                thumb: "https://i.imgur.com/pThdL12.png"
            },
            {
                type: 2,
                id: "henri_01",
                toProject: "leader:henri&media:1",
                source: "https://www.youtube.com/watch?v=xO8xUEzt4-o",
                thumb: "https://i.imgur.com/RAC1iRL.png"
            }, {
                type: 2, id: "henri_02",
                toProject: "leader:henri&media:2",
                source: "https://www.youtube.com/watch?v=jr06vjdUz4Q",
                thumb: "https://i.imgur.com/hkfXcuX.png"
            }, {
                type: 2, id: "henri_03",
                toProject: "leader:henri&media:3",
                source: "https://www.youtube.com/watch?v=gA4HkFxlYXc",
                thumb: "https://i.imgur.com/8EnbLd0.png"
            }, {
                type: 2, id: "henri_04",
                toProject: "leader:henri&media:4",
                source: "https://www.youtube.com/watch?v=ibWwHxjyBn0",
                thumb: "https://i.imgur.com/28Ny86p.png"
            }, {
                type: 2, id: "henri_05",
                toProject: "leader:henri&media:5",
                source: "https://www.youtube.com/watch?v=mOaCbz7jZFI",
                thumb: "https://i.imgur.com/CA8n5wl.png"
            }
        ]
    },
    {
        leader: {
            id: "kelly",
            name: "Kelly Perdomo",
            age: "25 años",
            place: "Barrio El Poblado I",
            title: "Trabajadora Social",
            thumb: "https://i.imgur.com/QGMsz82.png"               
        },
        media: [
            {
                type: 2, id: "kelly_00",
                toProject: "leader:kelly&media:0",
                source: "https://www.youtube.com/watch?v=FVKqnd6V9YU",
                thumb: "https://i.imgur.com/MEhZ26L.png"
            }, {
                type: 2, id: "kelly_01",
                toProject: "leader:kelly&media:1",
                source: "https://www.youtube.com/watch?v=55f3w9FLWaY",
                thumb: "https://i.imgur.com/MEhZ26L.png"
            }, {
                type: 2, id: "kelly_02",
                toProject: "leader:kelly&media:2",
                source: "https://www.youtube.com/watch?v=mn1H8WeP1qM",
                thumb: "https://i.imgur.com/MEhZ26L.png"
            }, {
                type: 2, id: "kelly_03",
                toProject: "leader:kelly&media:3",
                source: "https://www.youtube.com/watch?v=LEKAstNjEAs",
                thumb: "https://i.imgur.com/MEhZ26L.png"
            }, {
                type: 2, id: "kelly_04",
                toProject: "leader:kelly&media:4",
                source: "https://www.youtube.com/watch?v=BTQES1swQmE",
                thumb: "https://i.imgur.com/MEhZ26L.png"
            },
        ]
    },
]


let elements_in = [];
let elements_out = [];

projects.forEach(element => {
    element.media.forEach(element => {
        elements_out.push(element)
    });
});

function getVars(string) {

    let raw_vars = string.split("&");
    let vars = [];

    raw_vars.forEach(element => {
        let var_slices = element.split(":");
        let variable = `"${var_slices[0]}": "${var_slices[1]}"`;
        vars.push(variable);
    });

    return JSON.parse(`{
        ${vars[0]},
        ${vars[1]}
    }`);

}

let current_project;

