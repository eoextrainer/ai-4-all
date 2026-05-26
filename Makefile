# AI Masterclass Project Makefile

# Usage:
#   make feat SLUG=your-feature
#   make fix SLUG=your-fix
#   make record
#   make finish
#   make sync
#   make self-test

ifeq ($(SLUG),)
SLUG := $(shell date +%Y-%m-%d)-change
endif

feat:
	./scripts/request-flow.sh feat $(SLUG)

fix:
	./scripts/request-flow.sh fix $(SLUG)

record:
	./scripts/request-flow.sh record

finish:
	./scripts/request-flow.sh finish

sync:
	./scripts/request-flow.sh sync

self-test:
	./scripts/request-flow.sh self-test

.PHONY: feat fix record finish sync self-test
