package senai.atividade.sisturmaseatividades.dtos;

public record AtividadeRequest(
        String descricao,
        Long professor,
        Long turma
) {
}
