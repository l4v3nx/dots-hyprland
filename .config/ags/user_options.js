// For every option, see ~/.config/ags/modules/.configuration/user_options.js
// (vscode users ctrl+click this: file://./modules/.configuration/user_options.js)
// (vim users: `:vsp` to split window, move cursor to this path, press `gf`. `Ctrl-w` twice to switch between)
//   options listed in this file will override the default ones in the above file

const userConfigOptions = {
    ai: {
        defaultGPTProvider: "liquid",
    },
    appearance: {
        fakeScreenRounding: 0,
        onHoverTray: { // Appears the tray only on mouse hover
            enabled: false,
            delay: 1500, // Delay, in milliseconds, before the tray disappears again
        },
    },
    apps: {
        imageViewer: "eog",
        settings: 'XDG_CURRENT_DESKTOP="gnome" gnome-control-center',
        taskManager: "htop",
        terminal: "foot", // This is only for shell actions
    },
    cheatsheet: {
        keybinds: {
            configPath: "~/.config/hypr/custom/keybinds.conf",
        },
    },
    dock: {
        enabled: true,
        pinnedApps: [
            "org.gnome.Software",
            "org.gnome.Nautilus",
            "org.gnome.Settings",
            "firefox",
            "foot",
            "steam-runtime",
            "code",
            "ayugram-desktop",
            "telegram-desktop",
            "materialgram",
            "spotify-launcher",
            "com.obsproject.Studio",
            "vesktop",
            "libreoffice-writer",
            "moe.launcher.an-anime-game-launcher",
        ],
        monitorExclusivity: true, // Dock will move to other monitor along with focus if enabled
        trigger: [], // client_added, client_move, workspace_active, client_active
    },
    sidebar: {
        image: {
            allowNsfw: true,
        },
        pages: {
            order: ["apis", "tools"],
            apis: {
                order: ["gpt"], // To get anime back, revert 5264ec3
            },
        },
    },
    search: {
        enableFeatures: {
            directorySearch: false,
            aiSearch: false,
        },
    },
    weather: {
        city: "Moscow",
    },
    keybinds: {
        cheatsheet: {
            keybinds: {
                nextTab: "End",
                prevTab: "Home",
            },
            nextTab: "Ctrl+End",
            prevTab: "Ctrl+Home",
        },
    },
    bar: {
        utilities: ["snip", "picker", "keyboard", "camera"],
    },
};

export default userConfigOptions;
