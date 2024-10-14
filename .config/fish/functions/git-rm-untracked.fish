function git-rm-untracked
    git status --short | sed 's/??/rm -rf/e'
end
