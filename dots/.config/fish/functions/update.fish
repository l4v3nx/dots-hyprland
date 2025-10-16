function update --wraps='updmir && yay -Syyu' --description 'Full system update'
    updmir && yay -Syyu $argv
end
