// For every option, see ~/.config/ags/modules/.configuration/user_options.js
// (vscode users ctrl+click this: file://./modules/.configuration/user_options.js)
// (vim users: `:vsp` to split window, move cursor to this path, press `gf`. `Ctrl-w` twice to switch between)
//   options listed in this file will override the default ones in the above file

const userConfigOptions = {
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
    'ai': {
        'defaultGPTProvider': "oxygen4o",
    },
    'apps': {
        'bluetooth': "blueman-manager",
        'imageViewer': "eog",
        'settings': "XDG_CURRENT_DESKTOP=\"gnome\" gnome-control-center",
        'taskManager': "htop",
        'terminal': "foot", // This is only for shell actions
    },
    'appearance': {
        'fakeScreenRounding': 2,
    },
    'dock': {
        'enabled': false,
        'pinnedApps': ['firefox', 'org.gnome.Nautilus'],
        'monitorExclusivity': true, // Dock will move to other monitor along with focus if enabled
    },
}

export default userConfigOptions;
