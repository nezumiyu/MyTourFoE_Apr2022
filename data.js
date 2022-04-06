var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.3812258266047017,
        "pitch": 0.11891754201031546,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.12225964061419958,
          "pitch": -0.1476981346090156,
          "rotation": 6.283185307179586,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.09624815347549642,
          "pitch": 0.24580038746758248,
          "title": "Welcome!",
          "text": "This is the Faculty of Engineering in NUS"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.1745329251994363,
        "pitch": -0.1470383558944608,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.007698003144563259,
          "pitch": -0.025940915304895285,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.8419038285067764,
          "pitch": -0.06766220720880156,
          "rotation": 10.210176124166829,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.31947746683956346,
          "pitch": -0.07394753248370911,
          "title": "Engineering Building&nbsp;",
          "text": "Entrance to the Engineering building"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.1572879490983237,
        "pitch": -0.05513938346041414,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -3.042969513217683,
          "pitch": -0.008052887354679683,
          "rotation": 4.71238898038469,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7094843202042131,
          "pitch": 0.22131541799464216,
          "title": "Spinelli Coffee",
          "text": "Your dose of coffee everyday!"
        },
        {
          "yaw": -2.939661895934222,
          "pitch": 0.3506842422846308,
          "title": "Spacious discussion area",
          "text": "a working space for students"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
