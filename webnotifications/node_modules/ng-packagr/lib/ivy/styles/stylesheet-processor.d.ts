export declare enum CssUrl {
    inline = "inline",
    none = "none"
}
export interface Result {
    css: string;
    warnings: string[];
    error?: string;
}
export declare class StylesheetProcessor {
    private readonly basePath;
    private readonly cssUrl?;
    private readonly styleIncludePaths?;
    private browserslistData;
    private postCssProcessor;
    constructor(basePath: string, cssUrl?: CssUrl, styleIncludePaths?: string[]);
    process(filePath: string): Promise<string>;
    private createPostCssPlugins;
    private renderCss;
}
