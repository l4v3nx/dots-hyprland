export const keybindList = [[
    {
        "icon": "pin_drop",
        "name": "Workspaces: navigation",
        "binds": [
            { "keys": ["󰖳", "+", "#"], "action": "Go to workspace #" },
            { "keys": ["󰖳", "+", "S"], "action": "Toggle special workspace" },
            { "keys": ["󰖳", "+", "(Scroll ↑↓)"], "action": "Go to workspace -1/+1" },
            { "keys": ["Ctrl", "󰖳", "+", "←"], "action": "Go to workspace on the left" },
            { "keys": ["Ctrl", "󰖳", "+", "→"], "action": "Go to workspace on the right" },
        ],
        "id": 1
    },
    {
        "icon": "overview_key",
        "name": "Workspaces: management",
        "binds": [
            { "keys": ["󰖳", "Alt", "+", "#"], "action": "Move window to workspace #" },
            { "keys": ["󰖳", "Alt", "+", "S"], "action": "Move window to special workspace" },
            { "keys": ["󰖳", "Alt", "+", "←"], "action": "Move window to workspace on the left" },
            { "keys": ["󰖳", "Alt", "+", "→"], "action": "Move window to workspace on the right" }
        ],
        "id": 2
    },
    {
        "icon": "move_group",
        "name": "Windows",
        "binds": [
            { "keys": ["󰖳", "+", "Q"], "action": "Close window" },
            { "keys": ["󰖳", "Shift", "+", "Q"], "action": "Pick and kill a window" },
            { "keys": ["󰖳", "+", "←↑→↓"], "action": "Focus window in direction" },
            { "keys": ["󰖳", "Shift", "+", "←↑→↓"], "action": "Swap window in direction" },
            { "keys": ["󰖳", "+", ";"], "action": "Split ratio -" },
            { "keys": ["󰖳", "+", "'"], "action": "Split ratio +" },
            { "keys": ["󰖳", "+", "Lmb"], "action": "Move window" },
            { "keys": ["󰖳", "+", "Rmb", "OR", "󰖳", "Alt", "+", "Lmb"], "action": "Resize window" },
            { "keys": ["󰖳", "Alt", "+", "Space"], "action": "Float window" },
            { "keys": ["Ctrl", "󰖳", "+", "\\"], "action": "Make floating window smaller" },
            { "keys": ["󰖳", "+", "F"], "action": "Fullscreen" },
            { "keys": ["󰖳", "Alt", "+", "F"], "action": "Fake fullscreen" }
        ],
        "id": 3
    }
],
[
    {
        "icon": "widgets",
        "name": "Widgets (AGS)",
        "binds": [
            { "keys": ["󰖳", "+", "Tab"], "action": "Toggle overview/launcher" },
            { "keys": ["Ctrl", "󰖳", "+", "R"], "action": "Restart AGS" },
            { "keys": ["Ctrl", "󰖳", "Alt", "+", "R"], "action": "Restart AGS and reload Hyprland config" },
            { "keys": ["󰖳", "+", "/"], "action": "Toggle this cheatsheet" },
            { "keys": ["󰖳", "+", "K"], "action": "Toggle virtual keyboard" },
            { "keys": ["󰖳", "Shift", "+", "B"], "action": "Toggle utilities sidebar" },
            { "keys": ["󰖳", "Shift", "+", "N"], "action": "Toggle music controls" },
            { "keys": ["󰖳", "Shift", "+", "M"], "action": "Toggle system sidebar" },
            { "keys": ["Ctrl", "Alt", "+", "/"], "action": "Toggle focus mode" },
            { "keys": ["Ctrl", "Alt", "+", "Del"], "action": "Power/Session menu" },
            // { "keys": ["rightCtrl"], "action": "Dismiss/close sidebar" },
            { "keys": ["Ctrl", "󰖳", "+", "T"], "action": "Change wallpaper+colorscheme" },
            { "keys": ["Esc"], "action": "Exit a window" }
        ],
        "id": 4
    },
    {
        "icon": "construction",
        "name": "Utilities",
        "binds": [
            { "keys": ["PrtSc"], "action": "Screenshot  >>  clipboard" },
            { "keys": ["Ctrl", "PrtSc"], "action": "Screenshot  >>  file + clipboard" },
            { "keys": ["󰖳", "Shift", "+", "S"], "action": "Screen snip  >>  clipboard" },
            { "keys": ["󰖳", "Shift", "+", "T"], "action": "Screen snip to text (English)  >>  clipboard" },
            { "keys": ["󰖳", "Shift", "+", "R"], "action": "Screen snip to text (Russian)  >>  clipboard" },
            { "keys": ["󰖳", "Shift", "+", "C"], "action": "Pick color (hex)  >>  clipboard" },
            { "keys": ["󰖳", "Alt", "+", "R"], "action": "Record region" },
            { "keys": ["Ctrl", "Alt", "+", "R"], "action": "Record region (no sound)" },
            { "keys": ["Shift", "Alt", "+", "R"], "action": "Record screen (with sound)" }
        ],
        "id": 5
    },
],
[
    {
        "icon": "apps",
        "name": "Apps",
        "binds": [
            { "keys": ["󰖳", "+", "D"], "action": "Launch terminal: foot" },
            { "keys": ["󰖳", "+", "E"], "action": "Launch file manager: Nautilus (GNOME Files)" },
            { "keys": ["󰖳", "+", "W"], "action": "Launch browser: Firefox" },
            { "keys": ["󰖳", "+", "X"], "action": "Launch editor: Visual Studio Code" },
            { "keys": ["󰖳", "+", "I"], "action": "Launch settings: GNOME Control center" },
            { "keys": ["Ctrl", "󰖳", "+", "V"], "action": "Launch volume mixer: pavucontrol" }
        ],
        "id": 6
    },
    {
        "icon": "keyboard",
        "name": "Typing",
        "binds": [
            { "keys": ["󰖳", "+", "V"], "action": "Clipboard history  >>  clipboard" },
            { "keys": ["󰖳", "+", "."], "action": "Emoji picker  >>  clipboard" },
            { "keys": ["󰖳", "+", "B"], "action": "Previous track" },
            { "keys": ["󰖳", "+", "N"], "action": "Play/pause media" },
            { "keys": ["󰖳", "+", "M"], "action": "Next track" }
        ],
        "id": 7
    },
    {
        "icon": "terminal",
        "name": "Launcher actions",
        "binds": [
            { "keys": ["Ctrl", "󰖳", "+", "/"], "action": "Toggle fallback launcher: anyrun" },
            { "keys": [">raw"], "action": "Toggle mouse acceleration" },
            { "keys": [">img"], "action": "Select wallpaper and generate colorscheme" },
            { "keys": [">light"], "action": "Switch to light theme" },
            { "keys": [">dark"], "action": "Switch to dark theme" },
            { "keys": [">badapple"], "action": "Apply black n' white colorscheme" },
            { "keys": [">color"], "action": "Pick acccent color" },
            { "keys": [">todo"], "action": "Type something after that to add a To-do item" },
        ],
        "id": 8
    }
]];
