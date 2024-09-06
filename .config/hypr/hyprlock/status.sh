#!/usr/bin/env bash

############ Variables ############
enable_battery=false
battery_charging=false

####### Check availability ########
for battery in /sys/class/power_supply/*BAT*; do
  if [[ -f "$battery/uevent" ]]; then
    enable_battery=true
    if [[ $(cat /sys/class/power_supply/*/status | head -1) == "Charging" ]]; then
      battery_charging=true
    fi
    break
  fi
done

############# Output #############
if [[ $enable_battery == true ]]; then
  if [[ $battery_charging == true ]]; then
    echo -n "(+) "
  fi
  echo -n "$(cat /sys/class/power_supply/*/capacity | head -1)"%
  if [[ $battery_charging == false ]]; then
    echo -n " remaining"
  fi
fi

if [[ $DESKTOP_SESSION == "sway" ]]; then
  echo -n ", $(swaymsg -t get_inputs | jq -r '.. | select(type == "object" and .xkb_active_layout_name) | .xkb_active_layout_name' | head -n 1)"
elif [[ $DESKTOP_SESSION == "hyprland" ]]; then
  echo -n ", $(hyprctl -j devices | jq -r '.keyboards[] | select(.main) | .active_keymap')"
fi
