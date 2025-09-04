function fish_prompt -d "Write out the prompt"
    # This shows up as USER@HOST /home/user/ >, with the directory colored
    # $USER and $hostname are set by fish, so you can just use them
    # instead of using `whoami` and `hostname`
    printf '%s@%s %s%s%s > ' $USER $hostname \
        (set_color $fish_color_cwd) (prompt_pwd) (set_color normal)
end

if status is-interactive # Commands to run in interactive sessions can go here

    # No greeting
    set fish_greeting

    # Use starship
    starship init fish | source
    if test -f ~/.local/state/quickshell/user/generated/terminal/sequences.txt
        cat ~/.local/state/quickshell/user/generated/terminal/sequences.txt
    end

    abbr --add pamcan pacman
    abbr --add gti git

    abbr yain 'yay -S'
    abbr yaind 'yay -S --asdeps'
    abbr yainloc 'yay -U'
    abbr yarep 'yay -Sii'
    abbr yareps 'yay -Ss'
    abbr yaloc 'yay -Qii'
    abbr yalocs 'yay -Qs'
    abbr yals 'yay -Ql'
    abbr yamir 'yay -Syy'
    abbr yaown 'yay -Qo'
    abbr yare 'yay -Rn'
    abbr yarem 'yay -Rns'
    abbr yasu 'yay -Syu --noconfirm'
    abbr yaupg 'yay -Syu'
    abbr yarmorph 'yay -Rns (yay -Qdtq)'
    abbr yalist 'yay -Qe'

    alias ls 'eza --icons'
    alias clear "printf '\033[2J\033[3J\033[1;1H'"
    abbr sz 'du -ah'

end
