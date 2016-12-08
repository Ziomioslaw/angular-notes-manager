export class BrowserInteractionService {
    public question(yesNoQuestion): boolean {
        return confirm(yesNoQuestion);
    }
}
