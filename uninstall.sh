#!/usr/bin/env bash
cd "$(dirname "$0")"
source ./scriptdata/environment-variables

function v() {
	echo -e "[$0]: \e[32mNow executing:\e[0m"
	echo -e "\e[32m$@\e[0m"
	"$@"
}

printf 'Hi there!\n'
printf 'This script 1. will uninstall [end-4/dots-hyprland > illogical-impulse] dotfiles\n'
printf '            2. will try to revert *mostly everything* installed using install.sh, so it'\''s pretty destructive\n'
printf '            3. has not been tested, use at your own risk.\n'
printf '            4. will show all commands that it runs.\n'
printf 'Ctrl+C to exit. Enter to continue.\n'
read -r
set -e
##############################################################################################################################

# Undo Step 1: Removing copied config and local folders
printf '\e[36mRemoving copied config and local folders...\n\e[97m'

for i in ags fish fontconfig foot fuzzel hypr mpv nvim wlogout "starship.toml"; do
	v rm -rf "$XDG_CONFIG_HOME/$i"
done
for i in "glib-2.0/schemas/com.github.GradienceTeam.Gradience.Devel.gschema.xml" "gradience"
  do v rm -rf "$XDG_DATA_HOME/$i"
done
v rm -rf "$XDG_BIN_HOME/fuzzel-emoji"
v rm -rf "$XDG_BIN_HOME/rubyshot"
v rm -rf "$XDG_CACHE_HOME/ags"
v sudo rm -rf "$XDG_STATE_HOME/ags"

##############################################################################################################################

# Undo Step 2: Remove added user from video, i2c, and input groups
printf '\e[36mRemoving user from video, i2c, and input groups and removing packages...\n\e[97m'
user=$(whoami)
v sudo gpasswd -d "$user" video
v sudo gpasswd -d "$user" i2c
v sudo gpasswd -d "$user" input
v sudo rm /etc/modules-load.d/i2c-dev.conf

##############################################################################################################################
read -p "Do you want to uninstall packages used by the dotfiles?\nCtrl+C to exit, or press Enter to proceed"

# Undo Step 3: Remove yay packages
v yay -Rns hyprland-git illogical-impulse-{ags,audio,backlight,basic,fonts-themes,gnome,gtk,microtex-git,portal,python,screencapture,sway,widgets} plasma-browser-integration

printf '\e[36mUninstall Complete.\n\e[97m'
