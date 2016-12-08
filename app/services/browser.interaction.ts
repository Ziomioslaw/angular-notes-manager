export class BrowserInteractionService {
    public question(yesNoQuestion: string): boolean {
        return confirm(yesNoQuestion);
    }
}
