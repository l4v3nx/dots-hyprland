// For every option, see ~/.config/ags/modules/.configuration/user_options.js
// (vscode users ctrl+click this: file://./modules/.configuration/user_options.js)
// (vim users: `:vsp` to split window, move cursor to this path, press `gf`. `Ctrl-w` twice to switch between)
//   options listed in this file will override the default ones in the above file

const userConfigOptions = {
    'ai': {
        'defaultGPTProvider': "oxygen4o",
	    'proxyUrl': "http://127.0.0.1:8080",
    },
    'appearance': {
        'fakeScreenRounding': 0,
    },
    'apps': {
        'bluetooth': "blueman-manager",
        'imageViewer': "eog",
        'settings': "XDG_CURRENT_DESKTOP=\"gnome\" gnome-control-center",
        'taskManager': "htop",
        'terminal': "foot", // This is only for shell actions
    },
    'cheatsheet': {
        'keybinds': {
            'configPath': "~/.config/hypr/custom/keybinds.conf"
        }
    },
    'dock': {
        'enabled': true,
        'pinnedApps': ['org.gnome.Settings', 'org.gnome.Software', 'org.gnome.tweaks', 'org.gnome.Nautilus', 'firefox', 'foot', 'code-url-handler', 'steam', 'org.telegram.desktop', 'spotify-launcher', 'com.obsproject.Studio', 'vesktop'],
        'monitorExclusivity': true, // Dock will move to other monitor along with focus if enabled
        'trigger': [], // client_added, client_move, workspace_active, client_active
    },
    'sidebar': {
        'image': {
            'allowNsfw': true,
        },
        'pages': {
    	    'order': ["apis", "tools"],
    	    'apis': {
                'order': ["gpt", "waifu", "booru", "gemini"],
    	    }
	    },
    },
    'search': {
        'enableFeatures': {
            'directorySearch': false,
            'aiSearch': false,
        },
    },
    'keybinds': {
        'cheatsheet': {
            'keybinds': {
                'nextTab': "End",
                'prevTab': "Home",
            },
            'nextTab': "Ctrl+End",
            'prevTab': "Ctrl+Home",
        }
    },
}

export default userConfigOptions;
