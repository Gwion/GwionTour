serve:
	mdbook serve

add:
	@printf "\033[1mtitle\033[0m:";   read title;    \
	printf "\033[2m(do not supply `md` prefix)"      \
	printf "\033[1mfilename\033[0m:"; read filename; \
  echo "[$$title]($$filename.md)" >> src/SUMMARY.md
