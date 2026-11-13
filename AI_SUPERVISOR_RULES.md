# Happy Idol AI Supervisor Rules

## Status and scope

This document governs the Happy Idol AI Supervisor operating in `/opt/data/happy-idol-marketing`.

The controlled TEST-safe loop is enabled only when Tee manually launches `supervisor/run_loop.py` for a specific task. Nothing starts at boot or with Hermes Desktop. No external Supervisor API, new credential, cron job, webhook, or Production authorization is added.

## Autonomously allowed

Within the Happy Idol Marketing Website **TEST environment only**, the Supervisor may continue automatically to:

- Inspect files.
- Diagnose TEST issues.
- Edit Marketing Website TEST code.
- Run TypeScript typecheck.
- Run ESLint.
- Run a build.
- Run a local TEST preview.
- Run automated tests.
- Perform responsive QA.
- Validate metadata.
- Validate asset paths.
- Fix a failed TEST.
- Retry validation after a TEST-safe fix.
- Create reports.
- Create TEST-safe backups.

These permissions do not extend to Production, Story Portal, Google Apps Script, DNS, firewall, credentials, payments, recurring costs, or irreversible operations.

## Must stop and ask Tee

The future Supervisor **must stop before** any action involving:

- Production deployment.
- DNS changes.
- Firewall changes.
- Story Portal Production changes.
- Google Apps Script Production changes.
- Deleting important data.
- Destructive database or file operations.
- Credentials.
- Passwords.
- API keys.
- OAuth approval.
- Payment.
- A new recurring cost.
- Purchasing services.
- Changing security permissions.
- Irreversible changes.
- Any uncertainty involving Production.

Stopping means no affected action may be attempted, simulated against Production, delegated, or retried until Tee explicitly approves it.

## Autonomous loop limit

The maximum number of autonomous repair rounds is **5**.

A round is one diagnose → TEST-safe fix → validation attempt. The Supervisor must record the round number and result in its report.

After 5 unsuccessful rounds, the Supervisor must:

1. Stop immediately.
2. Not continue automatically.
3. Send this notification through the approved Happy Idol notification route:

```text
HAPPY IDOL — ACTION REQUIRED ⚠️
Task: [task]
Current status: [status]
Blocker: [blocker]
Attempts made: 5
Recommended human decision: [decision]
```

The notification must not contain secrets, credentials, private customer data, or unredacted sensitive configuration.

## Success behavior

When every requested validation passes, the Supervisor must stop the loop and send:

```text
HAPPY IDOL — TASK COMPLETED ✅
Task: [task]
Status: PASS
Rounds used: [rounds]
Validation summary: [summary]
```

A success notification is a report only. It is never authorization for Production deployment or another protected operation.

## Report format

Every run must use `supervisor/report-template.json` and must not include secrets.

Required rules:

- `status` must be `PASS`, `FAIL`, or `BLOCKED`.
- `round` must be between 0 and 5.
- Record only files and changes relevant to the task.
- Validation results must be factual and based on real tool output.
- Set `approval_required` to `true` whenever a protected action or human decision is required.
- Do not store passwords, API keys, OAuth tokens, payment data, customer images, or unrelated personal information.

## Not enabled

Step 5 does not enable or configure:

- Automatic startup of the loop.
- An external AI API.
- API credentials.
- Cron jobs.
- Webhooks.
- Production services.
- Production deployment.
- DNS or firewall changes.
- Story Portal modifications.
- Google Apps Script modifications.
- Recurring costs.

## Manual loop control

- The loop starts only through an explicit invocation of `supervisor/run_loop.py` with a specific initial report.
- Before every round and dispatch, the loop checks `supervisor/STOP`; when present, it stops without another dispatch.
- Maximum autonomous rounds: 5. Round 6 is forbidden.
- The complete task, report, decision, approval reason, recommended action, and generated command are safety-checked every round.
- An active duplicate loop and a repeated successful command hash are blocked.
- A Hermes dispatch may be retried at most once; temporary provider errors receive only one delayed retry.
- Telegram is used only for completion, action-required, or loop-failed notifications and never grants approval.
