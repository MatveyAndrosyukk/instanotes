const files = [
    {
        id: 232141332,
        title: "Работа",
        type: "FOALDER",
        opened: true,
        level: 0,
        fatherId: null,
        children: [
            {
                id: 734573086,
                title: "MA5600",
                type: "FOALDER",
                opened: true,
                level: 1,
                fatherId: 232141332,
                children: [
                    {
                        id: 867407333,
                        title: "MA5600 VDSL",
                        type: "FOALDER",
                        opened: true,
                        level: 2,
                        fatherId: 734573086,
                        children: [
                            {
                                id: 867407330,
                                title: "MA5600 VDSL удаление",
                                type: "FOALDER",
                                opened: true,
                                level: 3,
                                fatherId: 867407333,
                                children: [
                                    {
                                        id: 867407341,
                                        title: "платы",
                                        type: "FILE",
                                        opened: true,
                                        level: 4,
                                        fatherId: 867407330,
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 110345245,
                        title: "добавить плату",
                        type: "FILE",
                        opened: false,
                        level: 2,
                        fatherId: 734573086,
                        children: []
                    }
                ]
            },
            {
                id: 222225454,
                title: "C300M",
                type: "FOALDER",
                opened: true,
                level: 1,
                fatherId: 232141332,
                children: [
                    {
                        id: 333334256,
                        title: "добавить опцию TR-82",
                        type: "FILE",
                        opened: false,
                        level: 2,
                        fatherId: 222225454,
                        children: []
                    }
                ]
            }
        ]
    },
    {
        id: 23232,
        title: "Прога",
        type: "FOALDER",
        opened: true,
        level: 0,
        fatherId: null,
        children: [
            {
                id: 2323242,
                title: "React",
                type: "FOALDER",
                opened: true,
                level: 1,
                fatherId: 1224232,
                children: [
                    {
                        id: 45674734,
                        title: "добавить компонент",
                        type: "FILE",
                        opened: false,
                        level: 2,
                        fatherId: 734573086,
                        children: []
                    },
                    {
                        id: 5368876,
                        title: "удалить компонент",
                        type: "FILE",
                        opened: false,
                        level: 2,
                        fatherId: 734573086,
                        children: []
                    }
                ]
            },
            {
                id: 258089,
                title: "SQL",
                type: "FOALDER",
                opened: true,
                level: 1,
                fatherId: 232141332,
                children: [
                    {
                        id: 1112312,
                        title: "посмотреть количество по условию",
                        type: "FILE",
                        opened: false,
                        level: 2,
                        fatherId: 222225454,
                        children: []
                    }
                ]
            }
        ]
    }
]

export default files;