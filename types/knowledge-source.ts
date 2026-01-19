type SouceType="webiste" | "docs" | "upload" | "text"
type SouceSratus="active" | "training" | "error" | "excluded"

export interface KnowledgeSource {
    id: string;
    email: string;
    type: string;
    name: string;
    status: string;
    souce_url: string | null;
    content: string | null;
    meta_data: string | null
    created_at: string;
    updated_at: string;

}