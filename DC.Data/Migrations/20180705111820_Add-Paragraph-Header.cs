using Microsoft.EntityFrameworkCore.Migrations;

namespace DC.Data.Migrations
{
    public partial class AddParagraphHeader : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Header",
                table: "Paragraphs",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Header",
                table: "Paragraphs");
        }
    }
}
